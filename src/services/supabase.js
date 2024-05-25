import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ubvfuuyburqexztngdtg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVidmZ1dXlidXJxZXh6dG5nZHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1MDM4OTIsImV4cCI6MjAzMTA3OTg5Mn0.PCmCmLXQEeRQ-KQi9CpKaK4GZes9jothaaFcs45zi2M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
