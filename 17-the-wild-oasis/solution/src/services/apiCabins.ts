import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be loaded");
  }

  return data;
}

export async function createCabin(cabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin }]);

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
