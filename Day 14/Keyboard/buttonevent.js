var str=document.getElementById("txt1");

var btn=document.querySelectorAll("button");
btn.forEach(b =>{
    b.addEventListener('click',function(){
        alert(b.value+" "+str.value);
    })
})