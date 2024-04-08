const counters =document.querySelectorAll('.number');
console.log(counters);

counters.forEach(number => {
    number.innerText='0';
    let target=+number.getAttribute('data-target');
    console.log(target)
    
    let count=0;

    function incrementcounter(){
        if(count<target){
            count++;
            number.innerText=count;
            setInterval(incrementcounter,10);
        }else{
            number.innerText=target;
    }
   
    }
    incrementcounter();
    
});