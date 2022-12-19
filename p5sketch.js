let cnv;
let img = [];
let index;
let x;

let initialanimation = function (ia) {
  ia.preload = function () {
    for (let i = 0; i < 180; i++) {
      img[i] = ia.loadImage("Assets/Initialanim/" + i + ".png");
    }
  };

  ia.setup = function () {
    cnv = ia.createCanvas(ia.windowWidth, ia.windowHeight);
    cnv.parent("initialanimationcont");
    cnv.class("initialanimation");
  };

  ia.draw = function () {
    x = ia.mouseX;
    if (x <= 0) {
      x = 0;
    }
    ia.clear();
    ia.imageMode(ia.CENTER);
    index = ia.round(x / (ia.windowWidth / 178));
    ia.image(
      img[index],
      ia.windowWidth / 2,
      ia.windowHeight / 2,
      ia.windowHeight,
      ia.windowHeight
    );
  };

  ia.windowResized = function () {
    ia.resizeCanvas(ia.windowWidth, ia.windowHeight);
  };
};

let ia = new p5(initialanimation);
