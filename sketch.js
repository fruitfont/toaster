let font;
let step = "bread";
let selected = 1;
let selectedEffect = 1;
let bread = [{
    name: "Grain bread",
    comment: "You won't choose this option.",
    imageURL: "assets/bread/grain.jpg",
    image: null,
  },
  {
    name: "White bread",
    comment: "The easy option.",
    imageURL: "assets/bread/white.jpg",
    image: null,
  },
  {
    name: "Rye bread",
    comment: "Surprisingly tasty, actually.",
    imageURL: "assets/bread/rye.jpg",
    image: null,
  },
  {
    name: "Graham Cracker",
    comment: "Why?",
    imageURL: "assets/bread/graham.jpg",
    image: null,
  },
]

function preload() {
  font = loadFont("assets/Alsina.ttf");
  for(let i = 0; i < bread.length; i ++) {
    bread[i].image = loadImage(bread[i].imageURL);
  }
}

function setup() {
  createCanvas(400, 400);
  textFont(font);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW||keyCode === UP_ARROW) {
    if (selected === 0) {
      selected = bread.length - 1;
    } else {
      selected -= 1;
    }
  }
  if (keyCode === RIGHT_ARROW||keyCode === DOWN_ARROW) {
    if (selected === bread.length - 1) {
      selected = 0;
    } else {
      selected += 1;
    }
  }
  return false;
}

function appBar() {
  noStroke();
  fill(80, 116, 173);
  rect(0, 0, width, 60);
  textAlign(LEFT, CENTER);
  textSize(30);
  fill(255);
  text("toaster", 10, 0, width - 20, 50);
  textAlign(RIGHT, CENTER);
  text("selecting: " + step, 0, 0, width - 10, 50);
}

function items() {
  background(220);
  itemInfo();
  itemDots();
}

function itemDots() {
  if (step === "bread") {
    for (let i = 0; i < bread.length; i++) {
      if (i === selected) {
        stroke(0, 0, 0, 200);
      } else {
        stroke(0, 0, 0, 150);
      }
      strokeWeight(10);
      point(width / 2 + (i) * 20 - (bread.length - 1) * 20 / 2, height - 30);
    }
  }
}

function itemInfo() {
  noStroke();
  textAlign(CENTER, BOTTOM);
  for (let i = 0; i < bread.length; i++) {
    //item name
    fill(31, 29, 28);
    textSize(25);
    textLeading(20);
    text(bread[i].name, width / 2+width*i-selectedEffect*width, height - 75);
    //item comment
    fill(31, 29, 28, 180);
    textSize(20);
    text(bread[i].comment, width / 2+width*i-selectedEffect*width, height - 50);
    imageMode(CENTER);
    image(bread[i].image, width / 2+width*i-selectedEffect*width, height-height/2-10, height/2, height/2);
  }
}

function draw() {
  selectedEffect += (selected-selectedEffect)/8;
  items();
  appBar();
}
