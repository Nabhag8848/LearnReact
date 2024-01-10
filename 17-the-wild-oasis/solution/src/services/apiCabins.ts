import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be loaded");
  }

  return data;
}

export async function createCabin(cabin) {
  const imageName = `${crypto.randomUUID()}-${cabin.image.name}`.replace(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const cabinImageFile = cabin.image;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabinImageFile);

  if (storageError) {
    console.error(storageError);
    throw new Error("Cabin Image couldn't be Uploaded");
  }

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be created");
  }

  return data;
}

export async function deleteCabin(id: number) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be delete");
  }

  return data;
}
