const h1 = document.querySelector('h1'); 
const h3 = document.querySelector('h3'); 
const p = document.querySelector('p');

h1.addEventListener("dblclick", function(){
    h1.style.backgroundColor="red"; 
    h1.style.color="white";
});


h3.addEventListener("mouseover", function(){
   // h3.innerText=h3.innerText.substring(1);
   h3.innerText=h3.innerText.substring(0, h3.innerText.length - 1);
});

let clicked = false; 
p.addEventListener("click", function(){
    if(!clicked){
        p.style.backgroundColor="blue";
        p.style.color="yellow"; 
        clicked=true;   
    }else{
        p.style.backgroundColor="white";
        p.style.color="black"; 
        clicked=false;
    }
});