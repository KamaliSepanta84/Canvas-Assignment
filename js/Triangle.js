class Triangle {
  constructor(x, y, width, height, color, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.color = color;
    this.name = "Triangle";
  }

drawTriangle() {
    let height = (Math.sqrt(3) / 2) * this.width; 
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y); 
    this.ctx.lineTo(this.x - this.width / 2, this.y + height); 
    this.ctx.lineTo(this.x + this.width / 2, this.y + height); 
    this.ctx.closePath();
    this.ctx.fill();
}


  clearTriangle() {
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.width / 2, this.y - this.height);
    this.ctx.lineTo(this.x + this.width, this.y);
    this.ctx.closePath();
    this.ctx.fill();
  }

  changePosition(x, y) {
    this.clearTriangle();
    this.x = x;
    this.y = y;
    this.drawTriangle();
  }

  drawBorder() {
    this.ctx.strokeStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.width / 2, this.y - this.height);
    this.ctx.lineTo(this.x + this.width, this.y);
    this.ctx.closePath();
    this.ctx.stroke();
  }
}
