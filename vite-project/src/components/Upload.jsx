import React, { useState } from "react";
import "./Upload.css";
function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <label htmlFor="image-input">Select an image:</label>
      <input
        type="file"
        id="image-input"
        className="image-input"
        accept="image/*"
        onChange={handleImageChange}
      />

      {selectedImage && (
        <div>
          <h3>Selected Image:</h3>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
