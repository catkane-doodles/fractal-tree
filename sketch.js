let fr = 30;
let inc = 0.1;
let scl = 20;
let cols, rows, totalCount;

let depth = 10;

let xoff,
  yoff,
  zoff = 0;

let tree = [];
let particles = [];

let flowfield;

function setup() {
  frameRate(fr);
  let cnv = createCanvas(400, 800);
  colorMode(HSB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  totalCount = cols * rows;

  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);

  background(70);

  flowfield = new Array(totalCount);

  let a = createVector(width / 2, height + 100);
  let b = createVector(width / 2, height);
  let root = new Branch(a, b);

  tree[0] = root;

  for (let count = 0; count < depth; count++) {
    for (let i = tree.length - 1; i >= 0; i--) {
      if (!tree[i].finished) {
        let branches = tree[i].branch();
        tree.push(branches[0]);
        tree.push(branches[1]);
        tree[i].finished = true;
      }
    }
  }

  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
  }
}

function draw() {
  // background(50, 200);
  // for (let y = 0; y < rows; y++) {
  //   yoff = y * inc;
  //   for (let x = 0; x < cols; x++) {
  //     xoff = x * inc;
  //     let index = x + y * cols;
  //     let v = p5.Vector;
  //     flowfield[index] = v;
  //     stroke(0, 50);
  //     push();
  //     translate(x * scl, y * scl);
  //     strokeWeight(1);
  //     line(0, 0, 10, 0);
  //     pop();
  //   }
  //   zoff += 0.0003;
  // }
}
