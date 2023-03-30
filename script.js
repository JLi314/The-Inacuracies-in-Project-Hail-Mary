function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}

let modal = document.getElementById("star-map-modal");
let img = document.getElementById("star-map-image");
let modalImg = document.getElementById("img01");
img.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = "PHM_star_map.svg";
});
let closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
