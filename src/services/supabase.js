import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dyhinqfjybqimtjzznen.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5aGlucWZqeWJxaW10anp6bmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwOTgzNjMsImV4cCI6MjAxMzY3NDM2M30.gZsuOlB3GB9zZtez8DDK_AGvYMTJojEPA0_KhafY-rI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
