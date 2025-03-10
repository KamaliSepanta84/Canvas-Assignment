class Circle {
  /**
   * Creates a new Circle object
   * @param {number} x - The X-coordinate of the circle's center
   * @param {number} y - The Y-coordinate of the circle's center
   * @param {number} r - The radius of the circle
   * @param {string} color - The fill color of the circle (CSS color format)
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
   */
  constructor(x, y, r, color, ctx) {
    this.x = x; // X position of the circle's center
    this.y = y; // Y position of the circle's center
    this.r = r; // Radius of the circle
    this.color = color; // Fill color of the circle
    this.ctx = ctx || null; // Ensure ctx can be null for reloading from storage
    this.name = "Circle"; // Name identifier for the shape
  }

  /**
   * Draws the circle on the canvas
   */
  drawCircle() {
    if (!this.ctx) return; // Ensure ctx is available before drawing
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color; // Set fill color
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); // Draw circle
    this.ctx.closePath();
    this.ctx.fill(); // Fill the circle with color
  }

  /**
   * Clears the circle from the canvas by drawing over it with white
   */
  clearCircle() {
    if (!this.ctx) return; // Ensure ctx is available before clearing
    this.ctx.fillStyle = "white"; // Set fill color to white (background)
    this.ctx.strokeStyle = "white"; // Set stroke color to white
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); // Draw circle path
    this.ctx.fill(); // Fill with white
    this.ctx.stroke(); // Stroke with white to clear the outline
  }

  /**
   * Draws only the border of the circle
   */
  drawBorder() {
    if (!this.ctx) return; // Ensure ctx is available before drawing
    this.clearCircle(); // Clear the existing circle
    this.ctx.beginPath();
    this.ctx.strokeStyle = "black"; // Set border color to black
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); // Draw circle path
    this.ctx.stroke(); // Draw the border
    this.ctx.closePath();
  }
}
