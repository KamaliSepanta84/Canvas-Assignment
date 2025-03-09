class Rectangle {
  /**
   * Creates a new Rectangle object
   * @param {number} x - The X-coordinate of the top-left corner
   * @param {number} y - The Y-coordinate of the top-left corner
   * @param {number} width - The width of the rectangle
   * @param {number} height - The height of the rectangle
   * @param {string} color - The fill color of the rectangle (CSS color format)
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
   */
  constructor(x, y, width, height, color, ctx) {
    this.x = x; // X position of the rectangle
    this.y = y; // Y position of the rectangle
    this.width = width; // Width of the rectangle
    this.height = height; // Height of the rectangle
    this.color = color; // Fill color of the rectangle
    this.ctx = ctx; // Canvas rendering context
    this.name = "Rectangle"; // Name identifier for the shape
  }

  /**
   * Clears the rectangle from the canvas
   */
  clearRectangle() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  /**
   * Draws the rectangle on the canvas
   */
  drawRectangle() {
    this.ctx.fillStyle = this.color; // Set fill color
    this.ctx.fillRect(this.x, this.y, this.width, this.height); // Draw filled rectangle
  }

  /**
   * Fills in the rectangle with the specified color
   */
  colorDrawing() {
    this.ctx.fillStyle = this.color; // Set fill color
    this.ctx.fill(); // Apply fill color
  }

  /**
   * Changes the position of the rectangle and redraws it
   * @param {number} x - The new X-coordinate
   * @param {number} y - The new Y-coordinate
   */
  changePosition(x, y) {
    this.clearRectangle(); // Clear previous rectangle
    this.x = x; // Update X-coordinate
    this.y = y; // Update Y-coordinate
    this.drawRectangle(); // Redraw rectangle at new position
  }

  /**
   * Draws only the border of the rectangle
   */
  drawBorder() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height); // Clear the existing rectangle
    this.ctx.strokeStyle = this.color; // Set border color
    this.ctx.strokeRect(this.x, this.y, this.width, this.height); // Draw rectangle border
  }
}
