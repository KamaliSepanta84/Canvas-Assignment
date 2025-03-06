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
        let newShape = new Circle(clickX,clickY,80,"green",ctx);
        newShape.drawCircle();
        shapes.push(newShape);
        console.log(shapes);
    }

    else if (shape == "triangle") {
        clickX = event.pageX - this.offsetLeft;
        clickY = event.pageY - this.offsetTop;
        let newShape = new Triangle(clickX,clickY,100,100,"blue",ctx);
        newShape.drawTriangle();
        shapes.push(newShape);
        console.log(shapes);

    }

    else if (shape == "rectangle") {
        clickX = event.pageX - this.offsetLeft;
        clickY = event.pageY - this.offsetTop;
        let newShape = new Rectangle(clickX,clickY,50,50,"red",ctx);
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
       //
    }
  });

});
