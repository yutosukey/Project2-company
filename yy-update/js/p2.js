
console.log("dddd");

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function sccuess(){
   
  var x = document.getElementById("structure");
  x.style.border = '10px solid red';
  alert(x.className);
  if (x.className === "successNone"){
     x.className = "successDisplay"

     alert(x.className);
  }

    //x.style.display = "block";
 
}