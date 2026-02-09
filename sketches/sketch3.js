// Instance-mode sketch for tab 3
registerSketch('sk3', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = function () {
    p.background(240, 200, 200);

    // getting time
    let h = p.hour();
    let m = p.minute();

    let timeText = p.nf(h, 2) + ":" + p.nf(m, 2);

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

    // making paper
    p.fill(255);
    p.stroke(0);
    p.rect(230, 230, 160, 100, 10);

    // putting time on paper
    p.fill(0);
    p.noStroke();
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(24);
    p.text(timeText, 310, 280);
  };
  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
