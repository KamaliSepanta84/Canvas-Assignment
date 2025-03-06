class Rectangle {
  constructor(x, y, width, height, color, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = ctx;
    this.name = "Rectangle"
  }

  clearRectangle() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }
  drawRectangle() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  /**
   * Fills in the rectangle with the colour
   */
  colorDrawing() {
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  /**
   * Changes position of rectangle
   * @param {int} x - how many units from the left of the canvase
   * @param {int} y - how many units from the top of the canvas
   */
  changePosition(x, y) {
    this.clearRectangle();
    this.x = x;
    this.y = y;
    this.drawRectangle();
  }

  drawBorder() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = this.color;
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}
