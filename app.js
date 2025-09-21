const myGallery = document.getElementById("gallery");

async function fetchData() {
  const response = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
  );
  const data = await response.json();

  if (data.photos && data.photos.length > 0) {
    const sixPhotos = data.photos.slice(0, 6);
    displayPhotos(sixPhotos);
  }
}

function displayPhotos(photos) {
  myGallery.innerHTML = "";
  photos.forEach((photo) => {
    const imgElement = document.createElement("img");
    imgElement.src = photo.img_src;
    imgElement.alt = `Mars Rover Photp ${photo.id}`;
    imgElement.classList.add("photo");

    myGallery.appendChild(imgElement);
  });
}

document.getElementById("loadphotos").addEventListener("click", fetchData);
