// Instance-mode sketch for tab 2
registerSketch('sk2', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);

    let button = p.createButton('Enter Cat Time');
    button.position(300, 100);

    button.mousePressed(startCatTime);
  };

  function startCatTime() {
    inCatTime = true;
  }

  inCatTimeText = "You are now in cat time!  You will leave when the cat lets you."
  outCatTimeText = "You are out of cat time!"

  inCatTime = false;


  p.draw = function () {
    p.background(220);
    p.fill(100, 150, 240);
    p.textSize(32);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill('black');
    p.ellipse(150, 150, 100, 100);
    p.triangle(100, 150, 200, 150, 100, 50)
    p.triangle(200, 150, 100, 150, 200, 50)

    p.push();
    p.stroke('white');
    p.strokeWeight(4);
    p.line(150, 160, 225, 135);
    p.line(150, 160, 235, 160);
    p.line(150, 160, 225, 185);
    p.line(150, 160, 75, 135);
    p.line(150, 160, 60, 160);
    p.line(150, 160, 75, 185);
    p.pop();

    
    if (inCatTime == true) {
      p.text(inCatTimeText, 475, 25)
    } else {
      p.text(outCatTimeText, 175, 25)
    }
  };

  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
