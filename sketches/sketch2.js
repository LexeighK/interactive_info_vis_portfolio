// Instance-mode sketch for tab 2
registerSketch('sk2', function (p) {
  let button;
  let amountCatTime;
  let catTimeStart;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);

    button = p.createButton('Enter Cat Time');
    button.size(200, 50);
    button.style('font-size', '22px');
    button.position(300, 150);
    button.mousePressed(startCatTime);
  };

  function startCatTime() {
    inCatTime = true;
    catTimeStart = p.hour() * 60 + p.minute();
    amountCatTime = Math.floor(p.random(5, 30));
  }

  inCatTimeText = "You are now in cat time!  You will leave when the cat lets you."
  outCatTimeText = "You are not in cat time!"

  inCatTime = false;

  p.draw = function () {
    p.background(220);
    p.fill(100, 150, 240);
    p.textSize(32);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill('black');
    
    if (inCatTime) {
      let currentTime = p.hour() * 60 + p.minute();
      let timeLeft = amountCatTime - (currentTime - catTimeStart);

      p.textSize(20);
      p.text("Cat releases you in: " + timeLeft + " min", 400, 150);

      if (currentTime - catTimeStart >= amountCatTime) {
        inCatTime = false;
        button.show();
      }
    }
    // Cat Head
    p.ellipse(150, 150, 100, 100);
    p.triangle(100, 150, 180, 150, 100, 75)
    p.triangle(200, 150, 120, 150, 200, 75)

    // Cat body, changes on if in cat time
    if (inCatTime == true) {
      p.ellipse(150, 250, 125, 200);
      p.push();
      p.strokeWeight(15);
      p.line(160, 340, 285, 285);
      p.pop();
    } else {
      p.ellipse(210, 225, 190, 115);
      // tail
      p.push()
      p.strokeWeight(15);
      p.line(280, 200, 400, 165);
      p.pop();
      // legs
      p.push()
      p.strokeWeight(30);
      p.line(150, 250, 150, 300);
      p.line(175, 250, 175, 300);
      p.line(225, 250, 225, 300);
      p.line(250, 250, 250, 300);
      p.pop();
    }

    // Cat Whiskers
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

    // only show clock while out of cat time
    // From example sketch 5
    // Corner time display
    if (inCatTime == false) {
      p.push()
      const h = p.hour();
      const m = p.minute();
      const s = p.second();
      const label = p.nf(h, 2) + ':' + p.nf(m, 2) + ':' + p.nf(s, 2);

      p.noStroke();
      p.fill(20);
      p.textAlign(p.LEFT, p.TOP);  // change to RIGHT/BOTTOM for other corners
      p.textSize(50);
      p.text(label, 12, 350);   // top-left corner
      p.pop()
    }

    // Adding cat time random timer

    
    if (inCatTime == true) {
      p.text(inCatTimeText, 475, 25)
      button.hide()
    } else {
      p.text(outCatTimeText, 175, 25)
    }
  };

  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
