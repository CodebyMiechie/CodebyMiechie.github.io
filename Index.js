

document.getElementById("submit").onclick=function(){
  const Name = document.getElementById("name").value;
  let i = 10;
  
  let ans1 = document.getElementById("ans1").value;
  let ans2 = document.getElementById("ans2").value;
  let ans3 = document.getElementById("ans3").value;
  let ans4 = document.getElementById("ans4").value;
  let ans5 = document.getElementById("ans5").value;
  let ans6 = document.getElementById("ans6").value;
  let ans7 = document.getElementById("ans7").value;
  let ans8 = document.getElementById("ans8").value;
  let ans9 = document.getElementById("ans9").value;
  let ans10 = document.getElementById("ans10").value;

    if(ans1 == "A" ) {
      
    } else {
      i--;
    }
    
    if(ans2 == "B" ) {
      
    } else {
        i--
    }
    
    if(ans3 == "GONE"){
      
    } else {
      i--;
    }
    
    if(ans4 == "A"){
      
    } else {
      i--;
    }
    
    if(ans5 == "B"){
      
    } else {
      i--;
    }
    
    if(ans6 == "B"){
      
    } else {
      i--;
    }
    
    if(ans7 == "A"){
      
    } else {
      i--;
    }
    
    if(ans8 == "B"){
      
    } else {
      i--;
    }
    
    if(ans9 == "A"){
      
    } else {
      i--;
    }
    
    if(ans10 == "A"){
      
    } else {
      i--;
    }
  
  window.location.href= "Test.html?Name=" + encodeURIComponent(Name) + "&i=" + i;

}

console.log(name);