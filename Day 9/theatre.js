var seat=document.querySelector(".seat");

for(i=0;i<36;i++){
    var div=document.createElement("div");
    div.classList.add("s");
    seat.appendChild(div);
}
var bk=parseInt(document.getElementById("s").innerHTML);
var rem=parseInt(document.getElementById("r").innerHTML);

var s1=document.querySelectorAll(".s");
s1.forEach(seats=>{
    seats.addEventListener('click',function(){
        if(seats.classList.contains("colorchange")){
            seats.classList.remove("colorchange");
            rem++;
            bk--;
            document.getElementById("s").innerHTML=bk;
            document.getElementById("r").innerHTML=rem;
        }else{
            seats.classList.add("colorchange");
            bk++;
            rem--;
            document.getElementById("r").innerHTML=rem;
            document.getElementById("s").innerHTML=bk;
    }
    })
})