class Circle {
  constructor(x, y, r, color, ctx) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.ctx = ctx;
    this.name = "Circle"
  }

  drawCircle() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
    
  }

  clearCircle() {
    this.ctx.fillStyle = "white";
    this.ctx.strokeStyle = "white";
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
  }

  drawBorder() {
    this.clearCircle();
    this.ctx.beginPath();
    this.ctx.strokeStyle = "black";
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
