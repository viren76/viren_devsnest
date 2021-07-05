
let isDrawing = false;
let x = 0;
let y = 0;
var new_col='black';
var lw=1;
const canvas = document.getElementById("mycanvas");
const c = canvas.getContext("2d");
var back_col='white';

var col_chng;
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
    /* console.log("Mousedown"+x+" "+y); */

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
    //back_col=col_chng;
    back_col='white';
    lw=slider.value;
    c.fillStyle=back_col;
    c.fillRect(0,0,canvas.width,canvas.height);
    lw=slider.value;
    document.querySelector("#mycanvas").classList.remove("rubber");
    document.querySelector("#mycanvas").classList.remove("pen");
    //location.reload();
    }
  })


  var col=document.querySelector(".colors")
  var cn=col.childNodes;
  cn.forEach((cn1,e)=>{
    cn1.addEventListener('click',function(e){
      new_col=e.target.className;
      lw=slider.value;
      col_chng=new_col;
      document.querySelector("#mycanvas").classList.remove("rubber");
      document.querySelector("#mycanvas").classList.add("pen");

    })
  })


var cp=document.getElementById("color");
cp.addEventListener('input',function(){
  new_col=cp.value;
  //col_chng=new_col;
})

/* var btn_clr=document.querySelector(".clr");
  btn_clr.addEventListener('click',function(){
    if(confirm('Are you sure you want to clear the canvas ?')){
    c.clearRect(0,0,canvas.width,canvas.height);
    back_col=col_chng;
    lw=slider.value;
    c.fillStyle=back_col;
    c.fillRect(0,0,canvas.width,canvas.height);

    lw=1;
    document.querySelector("#mycanvas").classList.remove("rubber");
    document.querySelector("#mycanvas").classList.remove("pen");
    //location.reload();
    }
  }) */

var fc=document.getElementById("fill_color");
fc.addEventListener('input',function(e){
  back_col=fc.value;
  c.fillStyle=back_col;
  c.fillRect(0,0,canvas.width,canvas.height);
})

var pen=document.querySelector(".fa-pen-nib");
pen.addEventListener('click',function(){
  new_col=col_chng;
  lw=slider.value;
  if(document.querySelector("#mycanvas").classList.contains("pen"))
  {
    //console.log("contains");
    document.querySelector("#mycanvas").classList.remove("pen");
  }else{
    new_col=col_chng;
    document.querySelector("#mycanvas").classList.remove("rubber");
    document.querySelector("#mycanvas").classList.add("pen");
  }
})
 function change_size(){
  lw=document.getElementById("s1").value;
  document.querySelector("#mycanvas").classList.remove("pen");
  document.querySelector("#mycanvas").classList.add("rubber");
  new_col=back_col;
  //return lw;
} 

var rub=document.querySelector(".fa-eraser");
console.log(rub);
rub.addEventListener('click',function(){
    if(document.querySelector("#mycanvas").classList.contains("rubber")){
        document.querySelector("#mycanvas").classList.remove("rubber");
        document.querySelector("#mycanvas").classList.add("pen");
        new_col=col_chng;
        lw=slider.value;
    }else{
      new_col=back_col;
      document.querySelector("#s1").style.display="inline";
      lw=document.querySelector("#s1").value;
      document.querySelector("#mycanvas").classList.remove("pen");
      document.querySelector("#mycanvas").classList.add("rubber");
    //change_size();
    
        /* new_col=back_col; */
    }
})


document.querySelector("#down").addEventListener("click", () => {
    
  if(confirm('Are you sure you want to download ?')){
    const el = document.createElement("a");
     el.href = canvas.toDataURL();
     el.download = "image.png";
     el.click();
    }
   });

   