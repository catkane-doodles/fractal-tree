function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.show = function () {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };

  this.branch = function () {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 6);
    dir.mult(0.75);
    let newEnd = p5.Vector.add(this.end, dir);
    let b1 = new Branch(this.end, newEnd);

    dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 6);
    dir.mult(0.75);
    newEnd = p5.Vector.add(this.end, dir);
    let b2 = new Branch(this.end, newEnd);
    return [b1, b2];
  };
}
