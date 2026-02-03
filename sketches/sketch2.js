// Instance-mode sketch for tab 2
registerSketch('sk2', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function () {
    p.background(220);
    p.fill(100, 150, 240);
    p.textSize(32);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill('black');
    p.ellipse(150, 150, 100, 100);
    p.triangle(100, 150, 200, 150, 100, 50)
    p.triangle(200, 150, 100, 150, 200, 50)


  };

  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
