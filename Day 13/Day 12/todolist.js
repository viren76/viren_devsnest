if(localStorage.getItem("item")==null){
    var t="";
}else{
    var t=localStorage.getItem("item");
}
function deleteit(e){
    e.remove();
    localStorage.removeItem("item");

    t=document.querySelector("ul.l").innerHTML;
    localStorage.setItem("item",t);
}

function addItem(x){
    if(x.code==="Enter"){
        addItemm();
    }
}

var u=document.querySelector("ul.l")
function addItemm(){
    var str=document.getElementById("add_items").value;
        console.log(str);
        if(str){
        var listitem=`<li onclick="deleteit(this)"><span><i class="fa fa-trash" aria-hidden="true"></i></span>${str}</li>`;
        t+=listitem;
        localStorage.setItem("item",t);
        document.getElementById("app_container").innerHTML+=listitem;
        document.getElementById("add_items").value="";
        }else{
            alert("Please insert a todo");
        }
        
}
window.onload=()=>{
    if(localStorage.getItem==null){

    }
    else{
        u.innerHTML=localStorage.getItem("item");
    }
}