
import Image from "next/image";
import React, { useState } from "react";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [uploadError, setUploadError] = useState("");
  
  // Handle image upload
  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0]; // Get the selected file

    if (!imageFile) {
      console.error("No file selected.");
      setUploadError("Please select an image.");
      return;
    }

    const formData = new FormData(); // Create a new FormData object
    formData.append("image", imageFile); // Append the image to the form data

    // Log for debugging
    console.log("Uploading image:", imageFile);

    // Send the POST request to Imgur API
    fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: "Client-ID 572dce931366551", // Your Client ID
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Upload failed: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Upload successful:", data);
        setImageUrl(data.data.link); // Set the image URL from the Imgur response
        setUploadError(""); // Clear any previous errors
      })
      .catch((error) => {
        console.error("Error during upload:", error);
        setUploadError("Failed to upload the image.");
      });
  };

  return (
    <div className="w-full">
      <label className="block text-[15px] font-medium mb-1">Upload Your Image</label>
      <input
        type="file"
        id="file"
        accept="image/*" // Restrict to image file types
        onChange={handleImageUpload} // Call the upload function when an image is selected
        className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-100"
      />
      
      {uploadError && <p className="text-red-500">{uploadError}</p>}

      {imageUrl && (
        <div>
          <Image
            src={imageUrl}
            alt="Uploaded"
            className="w-full max-w-xs mt-4"
            id="img"
            height={500}
            width={1200}
          />
          <p id="url">Image URL: {imageUrl}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
