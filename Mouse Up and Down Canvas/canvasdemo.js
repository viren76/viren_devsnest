
let isDrawing = false;
let x = 0;
let y = 0;
var new_col='black';
var lw=1;
const canvas = document.getElementById("mycanvas");
const c = canvas.getContext("2d");
var back_col='white';
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
    if(confirm('Are you sure you want to clear the canvas ?')){
    c.clearRect(0,0,canvas.width,canvas.height);
    back_col='white';
    c.fillStyle=back_col;
    c.fillRect(0,0,canvas.width,canvas.height);

    lw=1;
    back_col='white';
    }
  })


  var col=document.querySelector(".colors")
  var cn=col.childNodes;
  cn.forEach((cn1,e)=>{
    cn1.addEventListener('click',function(e){
      new_col=e.target.className;
    })
  })

var un=document.querySelector(".undo");
un.addEventListener('click',function(e){
  console.log("Hello");
  //c.clearRect(0,0,)
})

var cp=document.getElementById("color");
cp.addEventListener('input',function(){
  new_col=cp.value;
})
var fc=document.getElementById("fill_color");
fc.addEventListener('input',function(){
  back_col=fc.value;
  c.fillStyle=back_col;
  c.fillRect(0,0,canvas.width,canvas.height);
})

var pen=document.querySelector(".fa-pen-nib");
pen.addEventListener('click',function(){
  new_col='black';
  document.querySelector(".container").classList.remove("rubber");
    document.querySelector(".container").classList.add("pen");
})

var rub=document.querySelector(".fa-eraser");
console.log(rub);
rub.addEventListener('click',function(){
    new_col=back_col;
    document.querySelector(".container").classList.remove("pen");
    document.querySelector(".container").classList.add("rubber");
})


document.querySelector("#down").addEventListener("click", () => {
    if(confirm('Are you sure you want to download ?')){
    const el = document.createElement("a");
     el.href = canvas.toDataURL();
     el.download = "image.png";
     el.click();
    }
   });

   function change_size(){
     lw=document.getElementById("s1").value+3;
   }

