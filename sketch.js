let font;
let step = "bread";
let toast = [];
let stepNumber = 0;
let steps = ["bread", "butter", "jam", "extra", "making"];
let selected = 0;
let selectedEffect = 0;
let timerOffset = 0;

let bread = [
  {
    name: "Whole Grain bread",
    comment: "Bread that contains grain.",
    imageURL: "assets/bread/grain.jpg",
    image: null,
  },
  {
    name: "White bread",
    comment: "Bread with the bran removed.",
    imageURL: "assets/bread/white.jpg",
    image: null,
  },
  {
    name: "Rye bread",
    comment: "Bread made from Rye grain.",
    imageURL: "assets/bread/rye.jpg",
    image: null,
  },
  {
    name: "Graham Cracker",
    comment: "Is a cracker.",
    imageURL: "assets/bread/graham.jpg",
    image: null,
  },
];

let butter = [
  {
    name: "Butter",
    comment: "Add some butter to your toast.",
    imageURL: "assets/butter/butter.png",
    image: null,
  },
  {
    name: "Skip Butter",
    comment: "Continue without butter.",
    imageURL: "assets/butter/nobutter.png",
    image: null,
  },
];

let jam = [
  {
    name: "Grape jam",
    comment: "Jam made of grape.",
    imageURL: "assets/jam/grape.png",
    //265°, 28%, 44%
    hue: 265, 
    sat: 28,
    bri: 44,
    image: null,
  },
  {
    name: "Strawberry jam",
    comment: "Jam made of strawberry.",
    imageURL: "assets/jam/strawberry.png",
    //350°, 94%, 93%
    hue: 350, 
    sat: 94,
    bri: 93,
    image: null,
  },
  {
    name: "Cherry jam",
    comment: "Jam made of cherry.",
    imageURL: "assets/jam/cherry.png",
    //331°, 95%, 39%
    hue: 331, 
    sat: 95,
    bri: 39,
    image: null,
  },
  {
    name: "Apple jam",
    comment: "Jam made of apple.",
    imageURL: "assets/jam/apple.png",
    //41°, 41%, 81%
    hue: 41, 
    sat: 41,
    bri: 81,
    image: null,
  },
  {
    name: "Pure chocolate",
    comment: "Who knows why.",
    imageURL: "assets/jam/chocolate.png",
    //28°, 90%, 19% 
    hue: 28, 
    sat: 90,
    bri: 19,
    image: null,
  },
  {
    name: "No jam",
    comment: "Skip jam.",
    imageURL: "assets/jam/nojam.png",
    image: null,
  },
];

let extra = [
  {
    name: "Nutella",
    comment: "A favorite choice of many children.",
    imageURL: "assets/extra/nutella.png",
    //28°, 90%, 19% 
    hue: 28, 
    sat: 90,
    bri: 19,
    image: null,
  },
  {
    name: "Peanut butter",
    comment: "Spread some peanut butter on your toast.",
    imageURL: "assets/extra/peanut.png",
    //27°, 53%, 71%
    hue: 27, 
    sat: 53,
    bri: 71,
    image: null,
  },
  {
    name: "Honey",
    comment: "Bee food.",
    imageURL: "assets/extra/honey.png",
    //32°, 66%, 83%
    hue: 32, 
    sat: 66,
    bri: 83,
    image: null,
  },
  {
    name: "Cinnamon",
    comment: "Cinnamon Spice.",
    imageURL: "assets/extra/cinnamon.png",
    //26°, 89%, 23% 
    hue: 26, 
    sat: 89,
    bri: 23,
    image: null,
  },
  {
    name: "Strawberry slices",
    comment: "Sliced strawberry.",
    imageURL: "assets/extra/strawberry.png",
    //360°, 78%, 59%
    hue: 360, 
    sat: 78,
    bri: 59,
    image: null,
  },
  {
    name: "Banana slices",
    comment: "Monke füd.",
    imageURL: "assets/extra/banana.png",
    //48°, 27%, 96%
    hue: 48, 
    sat: 27,
    bri: 96,
    image: null,
  },
  {
    name: "Avacado spread",
    comment: "For the millenials.",
    imageURL: "assets/extra/avacado.png",
    //84°, 39%, 53%
    hue: 84, 
    sat: 39,
    bri: 53,
    image: null,
  },
  {
    name: "Cream Cheese",
    comment: "Cheese made creamy.",
    imageURL: "assets/extra/creamcheese.png",
    //53°, 13%, 99%
    hue: 53, 
    sat: 13,
    bri: 99,
    image: null,
  },
  {
    name: "Mayonnaise",
    comment: "Is this an instrument?",
    imageURL: "assets/extra/mayo.png",
    //54°, 7%, 100%
    hue: 54, 
    sat: 7,
    bri: 100,
    image: null,
  },
  {
    name: "Chicken",
    comment: "If you want more meats.",
    imageURL: "assets/extra/chicken.png",
    //37°, 86%, 44% 
    hue: 37, 
    sat: 86,
    bri: 44,
    image: null,
  },
  {
    name: "Mashed Potatoes",
    comment: "Potatoes but mash.",
    imageURL: "assets/extra/potatoes.png",
    //55°, 13%, 100% 
    hue: 55, 
    sat: 13,
    bri: 100,
    image: null,
  },
  {
    name: "Marshmallows",
    comment: "Good on crackers.",
    imageURL: "assets/extra/marshmallow.png",
    //0°, 0%, 95% 
    hue: 0, 
    sat: 0,
    bri: 95,
    image: null,
  },
  {
    name: "Shattered pavement",
    comment: "Real jawbreakers.",
    imageURL: "assets/extra/pavement.png",
    //0°, 0%, 47%
    hue: 0, 
    sat: 0,
    bri: 47,
    image: null,
  },
  {
    name: "No extras",
    comment: "Skip extras.",
    imageURL: "assets/extra/noextras.png",
    image: null,
  },
];

//actual code stuff
function preload() {
  font = loadFont("assets/Alsina.ttf");
  for (let i = 0; i < bread.length; i++) {
    bread[i].image = loadImage(bread[i].imageURL);
  }

  for (let i = 0; i < butter.length; i++) {
    butter[i].image = loadImage(butter[i].imageURL);
  }

  for (let i = 0; i < jam.length; i++) {
    jam[i].image = loadImage(jam[i].imageURL);
  }

  for (let i = 0; i < extra.length; i++) {
    extra[i].image = loadImage(extra[i].imageURL);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  frameRate(60);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function action(which) {
  if (which === "left") {
    
    if (step === "bread") {
      if (selected === 0) {
        selected = bread.length - 1;
      } else {
        selected -= 1;
      }
    }
    
    if (step === "butter") {
      if (selected === 0) {
        selected = butter.length - 1;
      } else {
        selected -= 1;
      }
    }
    
    if (step === "jam") {
      if (selected === 0) {
        selected = jam.length - 1;
      } else {
        selected -= 1;
      }
    }
    
    if (step === "extra") {
      if (selected === 0) {
        selected = extra.length - 1;
      } else {
        selected -= 1;
      }
    }
  }
  
  if (which === "right") {
    
    if(step === "bread") {
      if (selected === bread.length - 1) {
        selected = 0;
      } else {
        selected += 1;
      }
    }
    
    if(step === "butter") {
      if (selected === butter.length - 1) {
        selected = 0;
      } else {
        selected += 1;
      }
    }
    
    if(step === "jam") {
      if (selected === jam.length - 1) {
        selected = 0;
      } else {
        selected += 1;
      }
    }
    
    if(step === "extra") {
      if (selected === extra.length - 1) {
        selected = 0;
      } else {
        selected += 1;
      }
    }
  }
  
  if (which === "next") {
    if (stepNumber + 1 < steps.length) {
      if (step == "bread") {
        toast[toast.length] = {
          type: "bread",
          thing: bread[selected].name,
          number: selected
        };
      }

      if (step == "butter") {
        toast[toast.length] = {
          type: "butter",
          thing: butter[selected].name,
          number: selected
        };
      }

      if (step == "jam") {
        toast[toast.length] = {
          type: "jam",
          thing: jam[selected].name,
          number: selected,
          hue: jam[selected].hue,
          sat: jam[selected].sat,
          bri: jam[selected].bri,
        };
      }

      if (step == "extra") {
        toast[toast.length] = {
          type: "extra",
          thing: extra[selected].name,
          number: selected,
          hue: extra[selected].hue,
          sat: extra[selected].sat,
          bri: extra[selected].bri,
        };
      }
      print(toast);
      stepNumber += 1;
      step = steps[stepNumber];
      if (step === "making") {
        timerOffset = millis();
      }
      selected = 0;
    }
  }
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    action("right");
  }
  if (keyCode === LEFT_ARROW) {
    action("left");
  }
  if (keyCode === ENTER) {
    action("next");
  }
}
function appBar() {
  rectMode(CORNER);
  noStroke();
  fill(80, 116, 173);
  rect(0, 0, width, 60);
  textAlign(LEFT, CENTER);
  textSize(30);
  fill(255);
  text("toaster", 10, 0, width - 20, 50);
  textAlign(RIGHT, CENTER);
  text(step, 0, 0, width - 10, 50);
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

  if (step === "butter") {
    for (let i = 0; i < butter.length; i++) {
      if (i === selected) {
        stroke(0, 0, 0, 200);
      } else {
        stroke(0, 0, 0, 150);
      }
      strokeWeight(10);
      point(width / 2 + (i) * 20 - (butter.length - 1) * 20 / 2, height - 30);
    }
  }

  if (step === "jam") {
    for (let i = 0; i < jam.length; i++) {
      if (i === selected) {
        stroke(0, 0, 0, 200);
      } else {
        stroke(0, 0, 0, 150);
      }
      strokeWeight(10);
      point(width / 2 + (i) * 20 - (jam.length - 1) * 20 / 2, height - 30);
    }
  }

  if (step === "extra") {
    for (let i = 0; i < extra.length; i++) {
      if (i === selected) {
        stroke(0, 0, 0, 200);
      } else {
        stroke(0, 0, 0, 150);
      }
      strokeWeight(10);
      point(width / 2 + (i) * 20 - (extra.length - 1) * 20 / 2, height - 30);
    }
  }
}
function itemInfo() {
  noStroke();
  textAlign(CENTER, BOTTOM);
  if (step === "bread") {
    for (let i = 0; i < bread.length; i++) {
      //item image
      imageMode(CENTER);
      image(bread[i].image, width / 2 + width * i - floor(selectedEffect * width), height - height / 2 - 10, height / 2, height / 2);
      //item name
      fill(31, 29, 28);
      textSize(25);
      textLeading(20);
      text(bread[i].name, width / 2 + width * i - selectedEffect * width, height - 75);
      //item comment
      fill(31, 29, 28, 180);
      textSize(20);
      text(bread[i].comment, width / 2 + width * i - selectedEffect * width, height - 50);
    }
  }

  if (step === "butter") {
    for (let i = 0; i < butter.length; i++) {
      //item image
      imageMode(CENTER);
      image(butter[i].image, width / 2 + width * i - floor(selectedEffect * width), height - height / 2 - 10, height / 2, height / 2);
      //item name
      fill(31, 29, 28);
      textSize(25);
      textLeading(20);
      text(butter[i].name, width / 2 + width * i - selectedEffect * width, height - 75);
      //item comment
      fill(31, 29, 28, 180);
      textSize(20);
      text(butter[i].comment, width / 2 + width * i - selectedEffect * width, height - 50);
    }
  }

  if (step === "jam") {
    for (let i = 0; i < jam.length; i++) {
      //item image
      imageMode(CENTER);
      image(jam[i].image, width / 2 + width * i - floor(selectedEffect * width), height - height / 2 - 10, height / 2, height / 2);
      //item name
      fill(31, 29, 28);
      textSize(25);
      textLeading(20);
      text(jam[i].name, width / 2 + width * i - selectedEffect * width, height - 75);
      //item comment
      fill(31, 29, 28, 180);
      textSize(20);
      text(jam[i].comment, width / 2 + width * i - selectedEffect * width, height - 50);
    }
  }

  if (step === "extra") {
    for (let i = 0; i < extra.length; i++) {
      //item image
      imageMode(CENTER);
      image(extra[i].image, width / 2 + width * i - floor(selectedEffect * width), height - height / 2 - 10, height / 2, height / 2);
      //item name
      fill(31, 29, 28);
      textSize(25);
      textLeading(20);
      text(extra[i].name, width / 2 + width * i - selectedEffect * width, height - 75);
      //item comment
      fill(31, 29, 28, 180);
      textSize(20);
      text(extra[i].comment, width / 2 + width * i - selectedEffect * width, height - 50);
    }
  }

}
function make() {
  let timer = (millis()-timerOffset)*(width/100000);
  
  //toast
  rectMode(CENTER);
  colorMode(HSB);
  fill(25, 22+constrain(timer,0,80)*0.1, 87-constrain(timer,0,80)*0.25);
  rect(-100+(timer*10),height-50,200,25);
  
  // extra
  if(toast[3].thing!=="No extras") {
  fill(toast[3].hue, toast[3].sat, toast[3].bri);
  rect(-100+(timer*10),height-64-height+constrain((timer*100)-6000, 0, height),140,8);
  }
  
  // jam
  if(toast[2].thing!=="No jam") {
  fill(toast[2].hue, toast[2].sat, toast[2].bri);
  rect(-100+(timer*10),height-62-height+constrain((timer*100)-4000, 0, height),150,6);
  }
  
  //butter
  if(toast[1].thing==="Butter") {
    fill(0,0,100);
    rect(-100+(timer*10),height-60-height+constrain((timer*100)-2000, 0, height),150,2);
  }
  
  colorMode(RGB);
  //scene
  rectMode(CORNER);
  fill(161, 145, 145);
  rect(0,height-37,width,37);
  let done = constrain(timer*10-(width+200),0,100)*((height/2)/100)
  rect(0,0,width,constrain(height+done*10, 410, 10000)/2);
  
  //done text
  fill(255);
  textAlign(CENTER, TOP);
  text("DONE",width/2,height-done);
};
function draw() {
  noSmooth();
  selectedEffect += (selected - selectedEffect) / 8;
  if(step!="making") {
    items();
  }else{
    background(54, 33, 32);
    make();
    fill(255);
    textLeading(28);
    textAlign(LEFT, TOP);
    text(toast[0].thing +"\n" + toast[1].thing+ "\n" + toast[2].thing+ "\n" + toast[3].thing,10,70);
  }
  appBar();
}
