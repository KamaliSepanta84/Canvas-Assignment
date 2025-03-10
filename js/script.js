/**
 * Names: Sepanta Kamali, Umer Qureshi
 * MacIDs: kamals19, quresu9
 * Student Numbers: 400572915, 400562564
 * Date: March 9th, 2025
 * This is the main JavaScript file of the Project
 */
window.addEventListener("load", function (event) {
  let c = document.getElementById("testCanvas");
  let ctx = c.getContext("2d");
  let shapes = [];
  let clickX;
  let clickY;
  let shape;

  // defining the DOM elements.
  let clearBtn = document.getElementById("clearButton");
  let undoBtn = document.getElementById("undoButton");
  let circle = document.getElementById("circle");
  let triangle = document.getElementById("triangle");
  let rectangle = document.getElementById("rectangle");
  let circleRange = document.getElementById("circle-range");
  let rectangleRange = document.getElementById("rectangle-range");
  let triangleRange = document.getElementById("triangle-range");
  let circleColor = document.getElementById("circle-color");
  let rectangleColor = document.getElementById("rectangle-color");
  let triangleColor = document.getElementById("triangle-color");

  // Getting the shapes data from the local storage every time the page loads.
  let prevShapes = JSON.parse(localStorage.getItem("userShapes") || "[]");

  /**
   * redraws user's previous creation on canvas when they login
   */
  for (let eachShape of prevShapes) {
    let newShape;
    if (eachShape.name === "Circle") {
      newShape = new Circle(
        eachShape.x,
        eachShape.y,
        eachShape.r,
        eachShape.color,
        ctx
      );
      newShape.drawCircle();
    } else if (eachShape.name === "Rectangle") {
      newShape = new Rectangle(
        eachShape.x,
        eachShape.y,
        eachShape.width,
        eachShape.height,
        eachShape.color,
        ctx
      );
      newShape.drawRectangle();
    } else if (eachShape.name === "Triangle") {
      newShape = new Triangle(
        eachShape.x,
        eachShape.y,
        eachShape.width,
        eachShape.height,
        eachShape.color,
        ctx
      );
      newShape.drawTriangle();
    }
    if (newShape) {
      shapes.push(newShape);
      localStorage.userShapes = JSON.stringify(shapes)
    }
  }

  // adding the event listeners for the shapes
  circle.addEventListener("click", function (event) {
    shape = "circle";
  });
  triangle.addEventListener("click", function (event) {
    shape = "triangle";
  });
  rectangle.addEventListener("click", function (event) {
    shape = "rectangle";
  });

  /**
   * If the user clicks on the canvas, we call the draw method, draw the shape, and push it to the shapes array
   */
  c.addEventListener("click", function (event) {
    if (!shape) {
    } else if (shape == "circle") {
      clickX = event.pageX - this.offsetLeft;
      clickY = event.pageY - this.offsetTop;
      let newShape = new Circle(
        clickX,
        clickY,
        parseInt(circleRange.value),
        circleColor.value,
        ctx
      );
      newShape.drawCircle();
      shapes.push(newShape);
      localStorage.userShapes = JSON.stringify(shapes);
      console.log(localStorage.userShapes);
    } else if (shape == "triangle") {
      clickX = event.pageX - this.offsetLeft;
      clickY = event.pageY - this.offsetTop;
      let newShape = new Triangle(
        clickX,
        clickY - triangleRange.value / 2,
        parseInt(triangleRange.value),
        parseInt(triangleRange.value),
        triangleColor.value,
        ctx
      );
      newShape.drawTriangle();
      shapes.push(newShape);
      localStorage.userShapes = JSON.stringify(shapes);
      console.log(localStorage.userShapes);
    } else if (shape == "rectangle") {
      clickX = event.pageX - this.offsetLeft;
      clickY = event.pageY - this.offsetTop;
      let newShape = new Rectangle(
        clickX - rectangleRange.value / 2,
        clickY - rectangleRange.value / 2,
        parseInt(rectangleRange.value),
        parseInt(rectangleRange.value),
        rectangleColor.value,
        ctx
      );
      newShape.drawRectangle();
      shapes.push(newShape);
      localStorage.userShapes = JSON.stringify(shapes);
      console.log(localStorage.userShapes);
    }
  });

  /**
   * Clears canvas using clearRect and empties array along with local storage
   */
  clearBtn.addEventListener("click", function (event) {
    ctx.clearRect(0, 0, c.width, c.height);
    shapes = [];
    localStorage.userShapes = JSON.stringify(shapes);
  });

  /**
   * Reomves last shape from array, clears the canvas, and redraws all the prev shapes
   */
  undoBtn.addEventListener("click", function (event) {
    ctx.clearRect(0, 0, c.width, c.height);
    shapes.pop();
    localStorage.userShapes = JSON.stringify(shapes);
    for (let eachShape of shapes) {
      if (eachShape.name == "Circle") {
        eachShape.drawCircle();
      } else if (eachShape.name == "Rectangle") {
        eachShape.drawRectangle();
      } else if (eachShape.name == "Triangle") {
        eachShape.drawTriangle();
      }
    }
  });

  // adding the active class to the active button
  let buttonList = document.querySelectorAll(".btn");
  buttonList.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      document.querySelector(".btn-active")?.classList.remove("btn-active");
      btn.classList.add("btn-active");
    });
  });
});
