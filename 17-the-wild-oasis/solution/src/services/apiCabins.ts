import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be loaded");
  }

  return data;
}

export async function createEditCabin(cabin, id) {
  const hasImagePath = cabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${crypto.randomUUID()}-${cabin.image.name}`.replace(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? cabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const cabinImageFile = cabin.image;

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, cabinImageFile);

    if (storageError) {
      console.error(storageError);
      throw new Error("Cabin Image couldn't be Uploaded");
    }
  }

  let query = supabase.from("cabins");

  if (!id) {
    query = query.insert([{ ...cabin, image: imagePath }]);
  } else {
    query = query.update({ ...cabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

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
