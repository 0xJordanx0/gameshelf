import supabase from "../services/supabase";

async function useUpdateUser() {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Error Updating user:", error.message);
  }

  return [data, error];
}

export default useUpdateUser;
