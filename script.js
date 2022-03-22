let img1 = document.querySelector(".img-1");
let img2 = document.querySelector(".img-2");
let img3 = document.querySelector(".img-3");
let img4 = document.querySelector(".img-4");
let img5 = document.querySelector(".img-5");

img1.addEventListener("click", () => {
  img1.classList.toggle("pic");
  // img2.classList.toggle("pic");
  // img3.classList.toggle("pic");
  // img4.classList.toggle("pic");
  // img5.classList.toggle("pic");
});
img2.addEventListener("click", () => {
  img1.classList.toggle("pic");
  img2.classList.toggle("pic");
  // img3.classList.toggle("pic");
  // img4.classList.toggle("pic");
  // img5.classList.toggle("pic");
});
img3.addEventListener("click", () => {
  img2.classList.toggle("pic");
  img3.classList.toggle("pic");
  // img4.classList.toggle("pic");
});
img4.addEventListener("click", () => {
  img4.classList.toggle("pic");
  img3  .classList.toggle("pic");
});
img5.addEventListener("click", () => {
  img5.classList.toggle("pic");
  img4.classList.toggle("pic");

});
