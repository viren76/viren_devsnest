var cards=document.querySelector(".cards");
var word=["a","b","c","d","e","f"];
var words=[...word,...word];
var matches=0;
var moves=30;

for(i=0;i<12;i++){
    var c=document.createElement("div");
    c.classList.add("c");
    var inner=document.createElement("div");
    inner.classList.add("inner");
    var front=document.createElement("div");
    front.classList.add("front");
    var back=document.createElement("div");
    back.classList.add("back");

    let rndm = Math.floor(Math.random()*(12-i));
    
    back.innerHTML="<h1>" + words[rndm] +"</h1>";
    /* console.log(back.innerHTML); */
    words.splice(rndm,1);

    inner.appendChild(front);
    inner.appendChild(back); 
    c.appendChild(inner);
    cards.appendChild(c);
}
var data;

var in_cards=document.querySelectorAll(".c");
/* console.log(in_cards); */
in_cards.forEach(i =>{
    i.addEventListener('click',function(){
        moves--;
        document.getElementById("r").innerHTML=moves;

        if(data){
            i.firstElementChild.classList.add("flip");
            setTimeout(() => {

                if(i.firstElementChild.lastChild.innerHTML!==data.firstElementChild.lastChild.innerHTML)
                {
                    i.firstElementChild.classList.remove("flip");
                    data.firstElementChild.classList.remove("flip");

                }
                else{
                    matches++;
                    i.style.visibility="hidden";
                    data.style.visibility="hidden";
                    document.getElementById("m").innerHTML=matches;
                }
                data=undefined;
            }, 500);

        }else{
            data=i;
            console.log(data);
            i.firstElementChild.classList.add("flip");
        }
    })
})
setInterval(()=>{
    if(matches==6){
        location.reload();
    }
    if(moves==0){
        location.reload();
    }
},100);
