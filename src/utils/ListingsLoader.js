import { supabase } from "@/api/Superbase";

export async function listingsLoader() {
  try {
    const { data, error } = await supabase
      .from("listings")
      .select("*, listingsImages(*)")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return { data, error: null };
  } catch (error) {
    console.error("Error fetching listings:", error);
    return { data: [], error };
  }
}
