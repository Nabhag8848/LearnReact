import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseKey = process.env.SUPABASE_KEY ?? "";

if (!supabaseUrl.length || !supabaseKey.length) {
  throw new Error("Supabase Credentials Not Provided");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
