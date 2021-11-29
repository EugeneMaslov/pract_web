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



function animate(options) {

  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction)

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}


function animateText(textArea) {
  let text = document.getElementById("AITextMin").title;
  let to = document.getElementById("AITextMin").title.length,
    from = 0;

  animate({
    duration: 5000,
    timing: bounce,
    draw: function(progress) {
      let result = (to - from) * progress + from;
      document.getElementById("AITextMin").innerHTML = text.substr(0, Math.ceil(result))
    }
  });
}


function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 2, 2) + Math.pow(b, 2)
    }
  }
}
