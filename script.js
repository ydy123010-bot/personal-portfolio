const btn = document.getElementById("button");
const userInput = document.getElementById("background-input");
const backgroundD = document.getElementById("home");

btn.addEventListener("click",function(){
  const results = userInput.value;
  console.log(results)
  backgroundD.style.backgroundColor = results;
  if(results === "Jake"){
    backgroundD.style.backgroundColor = "red";
  }
});