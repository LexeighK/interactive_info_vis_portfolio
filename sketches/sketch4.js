// Instance-mode sketch for tab 4
registerSketch('sk4', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = function () {
    p.background(200, 240, 200);

    // Postcard background
    p.fill(255, 250, 210); 
    p.stroke(180, 120, 80);
    p.strokeWeight(5);
    p.rect(50, 50, p.width - 100, p.height - 100, 20);

    // Title
    p.fill(30, 120, 40);
    p.noStroke();
    p.textSize(48);
    p.textAlign(p.LEFT, p.TOP);
    p.text('Postcard Clock', 80, 60);


  };
  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
