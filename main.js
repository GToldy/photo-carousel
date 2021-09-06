const images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg', 'photo7.jpg', 'photo8.jpg', 'photo9.jpg'];

let current = 0;
const cellCount = images.length;

let n_min = 3, n_max = images.length;
let width = 210; height = 140;
let base = width / 2, rot = 360 / n_max;
let zBase = Math.round(base / Math.tan(Math.PI / n_max));

function rotate() {
  let angle = current / cellCount * -360;
  $(".carousel").css("transform", `translateZ(${zBase}px) rotateY(${angle}deg)`)
}

$(".next").on("click", () => {
  current++;
  console.log(current);
  rotate();
});

$(".prev").on("click", () => {
  current--;
  console.log(current);
  rotate();
});