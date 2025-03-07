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
        alert("You have to choose a shape first!");
    }

    else if (shape == "circle") {
        clickX = event.pageX - this.offsetLeft;
        clickY = event.pageY - this.offsetTop;
        let newShape = new Circle(clickX,clickY,circleRange.value,"green",ctx);
        newShape.drawCircle();
        shapes.push(newShape);
        console.log(shapes);
    }

    else if (shape == "triangle") {
        clickX = event.pageX - this.offsetLeft;
        clickY = event.pageY - this.offsetTop;
        let newShape = new Triangle(clickX,clickY,triangleRange.value, triangleRange.value,"blue",ctx);
        newShape.drawTriangle();
        shapes.push(newShape);
        console.log(shapes);

    }

    else if (shape == "rectangle") {
        clickX = event.pageX - this.offsetLeft;
        clickY = event.pageY - this.offsetTop;
        let newShape = new Rectangle(clickX,clickY,rectangleRange.value, rectangleRange.value,"red",ctx);
        newShape.drawRectangle();
        shapes.push(newShape);
        console.log(shapes);
    }
  })

  clearBtn.addEventListener("click", function(event){
    ctx.clearRect(0,0,c.width, c.height);
  });

  undoBtn.addEventListener("click", function(event){
    ctx.clearRect(0,0,c.width, c.height);
    let shapeToRemove = shapes.pop();
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
