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
var new_col='black';
var lw=1;
const canvas = document.getElementById("mycanvas");
const c = canvas.getContext("2d");

/* var x_undo;
var y_undo;

var x_undo2;
var y_undo2; */
//var cont_col=document.querySelector(".container").style.backgroundColor;

var slider=document.getElementById("slider");
  slider.addEventListener('input',function(){
    var p_range=document.getElementById("num_range");
    
    lw=slider.value;
    p_range.innerHTML=lw;
    /* p_range.innerHTML=slider.value;
    lw=p_range.innerHTML; */
  })


canvas.addEventListener('mousedown', e => {
    
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    console.log("Mousedown"+x+" "+y);

  });

  canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        draw(c, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
      /* x_undo+=x;
      y_undo+=y; */

      //draw_undo(c,x,y,e.offsetX,e.offsetY);
    }
  });

  

  window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
    draw(c, x, y, e.offsetX, e.offsetY);
      x = 0;
      y = 0;
      isDrawing= false;
      /* x_undo2=e.offsetX;
      y_undo2=e.offsetY; */

      //console.log(x," ",y);

      //draw_undo(c, x, y, e.offsetX, e.offsetY);
    }
  });

  /* window.addEventListener('mouseout',function(){
    isDrwawing=false;
  }) */
  function draw(c, x1, y1, x2, y2){
   // console.log(x1," ",y1," ",x2," ",y2);
    c.beginPath();
    c.strokeStyle = new_col;
    c.lineWidth = lw;
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
    c.closePath();
  }
 

  var btn_clr=document.querySelector(".clr");
  btn_clr.addEventListener('click',function(){
    c.clearRect(0,0,canvas.width,canvas.height);
  })


  var col=document.querySelector(".colors")
  var cn=col.childNodes;
  cn.forEach((cn1,e)=>{
    cn1.addEventListener('click',function(e){
      new_col=e.target.className;
    })
  })
/* function move(e){
    if (isDrawing === true) {
        draw(c, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
      console.log("Hi");
}
} */

var eraser=document.querySelector(".erase");
eraser.addEventListener('click',function(){
  new_col='white'
  lw=slider.value;
})

var un=document.querySelector(".undo");
un.addEventListener('click',function(e){
  console.log("Hello");
  //c.clearRect(0,0,)
})


