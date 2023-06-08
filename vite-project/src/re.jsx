import ImageUploader from "./Upload";
const imageFile = document.querySelector(ImageUploader).files[0];
const reader = new FileReader();
reader.onloadend = function () {
  const base64Image = reader.result.split(",")[1];
  fetch("http://localhost:8000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image: base64Image }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Process the received data
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

reader.readAsDataURL(imageFile);
