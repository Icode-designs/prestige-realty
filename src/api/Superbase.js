import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://okevefkinqiuytoehrxn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZXZlZmtpbnFpdXl0b2VocnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzY1MzUsImV4cCI6MjA2OTAxMjUzNX0.ITQFzQYD4HwUGRAMcziYiC5p-EKfjoX0WCOXKgT97w8";

export const supabase = createClient(supabaseUrl, supabaseKey);
