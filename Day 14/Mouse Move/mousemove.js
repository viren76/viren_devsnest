function cords(event){
    var x=event.clientX;
    var y=event.clientY;
    var str=document.getElementById("c");
    str.innerHTML=("X axis: "+ x + " Y axis: "+ y);
}
function clearCords(){
    document.getElementById("c").innerHTML="";
}