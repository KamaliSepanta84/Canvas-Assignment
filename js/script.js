window.addEventListener("load", function (event) {
  let c = document.getElementById("testCanvas");
  let ctx = c.getContext("2d");
  let shapes = [];
  let clickX;
  let clickY;
  let shape;

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

  let prevShapes = JSON.parse(localStorage.userShapes);
  for (let eachShape of prevShapes) {
    let newShape;
    if (eachShape.name === "Circle") {
      newShape = new Circle(eachShape.x, eachShape.y, eachShape.radius, eachShape.color, ctx);
      newShape.drawCircle();
    } else if (eachShape.name === "Rectangle") {
      newShape = new Rectangle(eachShape.x, eachShape.y, eachShape.width, eachShape.height, eachShape.color, ctx);
      newShape.drawRectangle();
    } else if (eachShape.name === "Triangle") {
      newShape = new Triangle(eachShape.x, eachShape.y, eachShape.width, eachShape.height, eachShape.color, ctx);
      newShape.drawTriangle();
    }
    if (newShape) {
      shapes.push(newShape);
    }
  }

  circle.addEventListener("click", function(event){
    shape = "circle";
  });
  triangle.addEventListener("click", function(event){
    shape = "triangle";
  });
  rectangle.addEventListener("click", function(event){
    shape = "rectangle";
  });

  c.addEventListener("click", function(event){

    if (!shape) {

    }
    else if (shape == "circle") {
        clickX = event.pageX - this.offsetLeft;
        clickY = event.pageY - this.offsetTop;
        let newShape = new Circle(clickX, clickY, circleRange.value, circleColor.value,ctx);
        newShape.drawCircle();
        shapes.push(newShape);
        localStorage.userShapes = JSON.stringify(shapes);
        console.log(localStorage.userShapes);
    }
    else if (shape == "triangle") {
        clickX = event.pageX - this.offsetLeft;
        clickY = event.pageY - this.offsetTop;
        let newShape = new Triangle(clickX, clickY -triangleRange.value/2, triangleRange.value, triangleRange.value, triangleColor.value, ctx);
        newShape.drawTriangle();
        shapes.push(newShape);
        localStorage.userShapes = JSON.stringify(shapes);
        console.log(localStorage.userShapes);

    }
    else if (shape == "rectangle") {
        clickX = event.pageX - this.offsetLeft;
        clickY = event.pageY - this.offsetTop;
        let newShape = new Rectangle(clickX - rectangleRange.value/2, clickY -rectangleRange.value/2, rectangleRange.value, rectangleRange.value, rectangleColor.value, ctx);
        newShape.drawRectangle();
        shapes.push(newShape);
        localStorage.userShapes = JSON.stringify(shapes);
        console.log(localStorage.userShapes);
    }
  })

  clearBtn.addEventListener("click", function(event){
    ctx.clearRect(0,0,c.width, c.height);
    shapes = [];
    localStorage.userShapes = JSON.stringify(shapes);
  });

  undoBtn.addEventListener("click", function(event){
    ctx.clearRect(0,0,c.width, c.height);
    shapes.pop();
    localStorage.userShapes = JSON.stringify(shapes);
    for (let eachShape of shapes){
       if (eachShape.name == "Circle"){
           eachShape.drawCircle()
       }
       else if (eachShape.name == "Rectangle"){
           eachShape.drawRectangle()
       }
       else if (eachShape.name == "Triangle"){
           eachShape.drawTriangle()
       }
    }
  });

  let buttonList = document.querySelectorAll(".btn");
  buttonList.forEach((btn)=>{
      btn.addEventListener("click", function(event){
         document.querySelector('.btn-active')?.classList.remove('btn-active');
         btn.classList.add('btn-active');
      });
  });

});
