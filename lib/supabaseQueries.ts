import { supabase } from "./supabaseClient";

// Fungsi untuk mendapatkan data suhu & BPM
export async function getHealthData() {
  const { data, error } = await supabase
    .from("health_data") // Ganti dengan nama tabel di Supabase
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching health data:", error);
    return [];
  }
  return data;
}
