import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const REACT_APP_SUPABASE_URL= 'https://pvrykorluadhbdwkoxxj.supabase.co';
const REACT_APP_SUPABASE_ANON_KEY= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2cnlrb3JsdWFkaGJkd2tveHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0OTg4NzcsImV4cCI6MjA1NzA3NDg3N30.t7iQovWsAjQOr_YaCj-eMAeuXEa1RKHzGOBvzT86MTU';
const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);

export default function ImageUpload() {
  const [file, setFile] = useState(null);

  async function imageHandler() {
    if (!file) {
      alert("Please add an image.");
      return;
    }

    const filename = `${Date.now()}-${file.name}`; // Unique filename
    const extension = file.name.split(".").pop().toLowerCase();

    if (!["jpg", "png"].includes(extension)) {
      alert("You can only upload JPG or PNG images.");
      return;
    }

    const { error } = await supabase.storage.from("images").upload(filename, file, {
      cacheControl: "3600",
      upsert: true,
    });

    if (error) {
      console.error("Upload error:", error);
      alert("Upload failed!");
      return;
    }

    const { data } = supabase.storage.from("images").getPublicUrl(filename);
    console.log("Uploaded Image URL:", data.publicUrl);
    alert("Image uploaded successfully!");
  }

  return (
    <div>
      <h1>Image Upload Component</h1>
      <input 
        type="file" 
        accept="image/png, image/jpeg"
        onChange={(e) => setFile(e.target.files[0])} 
      />
      <button onClick={imageHandler} className="hover:bg-amber-200">
        Upload
      </button>
    </div>
  );
}
