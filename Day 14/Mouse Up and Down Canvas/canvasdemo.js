/* let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
 */
 
let isDrawing = false;
let x = 0;
let y = 0;

const canvas = document.getElementById("mycanvas");
const c = canvas.getContext("2d");

canvas.addEventListener('mousedown', e => {
    
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    console.log("Hello"+x+" "+y);
  });

  canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        draw(c, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
      console.log(x,"hey",y);
    }
  });

  window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
    draw(c, x, y, e.offsetX, e.offsetY);
      x = 0;
      y = 0;
      isDrawing= false;
      //console.log(x," ",y);
    }
  });

  function draw(c, x1, y1, x2, y2){
   // console.log(x1," ",y1," ",x2," ",y2);
    c.beginPath();
    c.strokeStyle = 'black';
    c.lineWidth = 1;
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
    c.closePath();
  }

/* function move(e){
    if (isDrawing === true) {
        draw(c, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
      console.log("Hi");
}
} */