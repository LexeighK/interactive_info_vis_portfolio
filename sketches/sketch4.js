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
    p.textSize(40);
    p.text('Postcard Clock', 65, 70);

    // Stamp
    p.fill(255, 100, 100);
    p.stroke(200, 50, 50);
    p.strokeWeight(3);
    p.rect(p.width - 150, 70, 80, 80, 10);
    
    // Address lines to show date and time
    const startX = p.width - 400;
    let startY = 350;
    const lineSpacing = 30;
    p.stroke(0);
    p.strokeWeight(1);

    for (let i = 0; i < 3; i++) {
      p.line(startX, startY + i * lineSpacing, startX + 300, startY + i * lineSpacing);
    }

    const dateStr = p.day() + '/' + (p.month()) + '/' + p.year();
    const timeStr = p.nf(p.hour(), 2) + ':' + p.nf(p.minute(), 2) + ':' + p.nf(p.second(), 2);

    p.noStroke();
    p.fill(0);
    p.textSize(16);
    p.textAlign(p.LEFT, p.CENTER);
    p.text(dateStr, startX + 5, startY + lineSpacing / 2); 
    p.text(timeStr, startX + 5, startY + 1.5 * lineSpacing); 
  
  };
  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
