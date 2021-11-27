function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


let x = 0;
let src = ["../assets/logoipsum.png", "../assets/logos.png",
 "../assets/402.png", "../assets/403.png"];
let max = src.length;


function logoClicked() {
  if (x < max) {
    var i = getRandomInt(src.length);
    var img = document.createElement('img');
    img.className = "groupFootHeroImage";
    img.src = src[i];
    src.splice(i, 1);
    x = x + 1;
    groupFootHeroId.appendChild(img);
  }
}
