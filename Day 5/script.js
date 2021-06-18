window.onload=()=>{
    const first= document.getElementById('fnum');
    const second = document.getElementById('snum');

    const button= document.querySelectorAll('button');

    button.forEach(b => {
        
        const addhandler = function() {

            switch(b.value){
                case '+':
                    const sum=parseInt(first.value) + parseInt(second.value);
                    let result1 = document.getElementById('result');
                    result1.innerHTML = sum;
                    break;
                case '-':
                    const subtract=parseInt(first.value) - parseInt(second.value);
                    let result2 = document.getElementById('result');
                    result2.innerHTML = subtract;
                    break;
                case '*':
                    const mult=parseInt(first.value)*parseInt(second.value);
                    let result3 = document.getElementById('result');
                    result3.innerHTML = mult;
                    break;
                case '/':
                    const divide=parseInt(first.value)/parseInt(second.value)
                    let result4 = document.getElementById('result');
                    result4.innerHTML = divide;
                    break;        
            }
                
        }

        b.addEventListener('click',addhandler);
    });
}