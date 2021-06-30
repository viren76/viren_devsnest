/* function keypressed(e){
    console.log(e);
}

function checkKey(e) {
    var event = window.event ? window.event : e;
    console.log(event.keyCode);
} */
function clickme(e){
    if (e.keyCode == '38') {
        document.querySelector("button.u").classList.toggle("color");
    }
    else if (e.keyCode == '40') {
        document.querySelector("button.d").classList.toggle("color");
    }
    else if (e.keyCode == '37') {
        document.querySelector("button.l").classList.toggle("color");
    }
    else if (e.keyCode == '39') {
        document.querySelector("button.r").classList.toggle("color");
    }
}