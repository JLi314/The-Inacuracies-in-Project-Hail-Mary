// Website visit count from counter API
function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}

// Modal image
let modal = document.getElementById("star-map-modal");

// Get the image and insert it inside the modal
let img = document.getElementById("star-map-image");
let modalImg = document.getElementById("img01");
img.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = "PHM_star_map.svg";
});

// Close Button
let closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
