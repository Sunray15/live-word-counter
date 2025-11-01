const ta = document.getElementById("ta");
const counter = document.querySelector(".counter");


function countingCharacter(){
  const text = ta.value;
  const length = text.length;
  counter.textContent=length;
  if(length>100){
    counter.style.color="red";
    
    
  }else{
    counter.style.color="#9DC183";
  }
  
}
ta.addEventListener("keyup",countingCharacter);

