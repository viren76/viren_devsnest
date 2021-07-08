var btn=document.querySelector("button");
var cont=document.querySelector(".container");

btn.addEventListener('click',async() =>{
    var ma=await fetch('https://api.quotable.io/random').
    then(res=>res.json()).
    then(data=>data.content);

    var div=document.createElement("div");
    div.innerHTML=ma;
    cont.appendChild(div);
    div.classList.add("quote");
    console.log(ma);
});