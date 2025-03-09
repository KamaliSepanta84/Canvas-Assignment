class Triangle {
  /**
   * Creates a new Triangle object
   * @param {number} x - The X-coordinate of the top vertex
   * @param {number} y - The Y-coordinate of the top vertex
   * @param {number} width - The base width of the triangle
   * @param {number} height - The height of the triangle
   * @param {string} color - The fill color of the triangle (CSS color format)
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
   */
  constructor(x, y, width, height, color, ctx) {
    this.x = x; // X position of the top vertex
    this.y = y; // Y position of the top vertex
    this.width = width; // Base width of the triangle
    this.height = height; // Height of the triangle
    this.ctx = ctx; // Canvas rendering context
    this.color = color; // Fill color of the triangle
    this.name = "Triangle"; // Name identifier for the shape
  }

  /**
   * Draws the triangle on the canvas
   */
  drawTriangle() {
    let height = (Math.sqrt(3) / 2) * this.width; // Calculate height based on an equilateral triangle formula
    this.ctx.fillStyle = this.color; // Set fill color
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y); // Move to top vertex
    this.ctx.lineTo(this.x - this.width / 2, this.y + height); // Draw left side
    this.ctx.lineTo(this.x + this.width / 2, this.y + height); // Draw right side
    this.ctx.closePath();
    this.ctx.fill(); // Fill the triangle with color
  }

  /**
   * Clears the triangle from the canvas by drawing over it with a white fill
   */
  clearTriangle() {
    this.ctx.fillStyle = "white"; // Set fill color to white (background)
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y); // Move to top vertex
    this.ctx.lineTo(this.x + this.width / 2, this.y - this.height); // Draw right side
    this.ctx.lineTo(this.x + this.width, this.y); // Draw base
    this.ctx.closePath();
    this.ctx.fill(); // Fill the shape to clear it
  }

  /**
   * Changes the position of the triangle and redraws it
   * @param {number} x - The new X-coordinate
   * @param {number} y - The new Y-coordinate
   */
  changePosition(x, y) {
    this.clearTriangle(); // Clear previous triangle
    this.x = x; // Update X-coordinate
    this.y = y; // Update Y-coordinate
    this.drawTriangle(); // Redraw triangle at new position
  }

  /**
   * Draws only the border of the triangle
   */
  drawBorder() {
    this.ctx.strokeStyle = this.color; // Set border color
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y); // Move to top vertex
    this.ctx.lineTo(this.x + this.width / 2, this.y - this.height); // Draw right side
    this.ctx.lineTo(this.x + this.width, this.y); // Draw base
    this.ctx.closePath();
    this.ctx.stroke(); // Draw the border of the triangle
  }
}
