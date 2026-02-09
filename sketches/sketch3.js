// Instance-mode sketch for tab 3
registerSketch('sk3', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
  let scribbles = [];
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

    // making paper
    p.fill(255);
    p.stroke(0);
    p.rect(230, 230, 160, 100, 10);

    // drawing on paper 
    let startX = p.random(240, 350);
    let startY = p.random(240, 320);
    let length = p.random(10, 40);
    let r = p.random(0, 180)
    let g = p.random(0, 180)
    let b = p.random(0, 180)
    let linePoints = [];

    for (let i = 0; i < length; i++) {
      let x = startX + i;
      let y = startY + p.noise(i * 0.1, p.frameCount * 0.05) * 10 - 5;
      linePoints.push({x, y});
    }

    scribbles.push({ points: linePoints, color: [r, g, b] });

    for (let l of scribbles) {
      p.stroke(...l.color);
      p.strokeWeight(2);
      p.beginShape();
      for (let pt of l.points) {
        p.vertex(pt.x, pt.y);
      }
      p.endShape();
    }
    
  };
  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
