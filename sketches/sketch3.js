// Instance-mode sketch for tab 3
registerSketch('sk3', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = function () {
    p.background(240, 200, 200);
    p.fill(100, 150, 240);

    p.stroke(100, 150, 240);
    
    // making a person
    p.ellipse(150, 150, 100, 100);
    p.ellipse(150, 288, 125, 175);
    p.push()
    p.strokeWeight(30);
    p.line(125, 500, 125, 360);
    p.line(175, 500, 175, 360);
    p.pop()
  };
  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
