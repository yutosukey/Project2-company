
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
   
  var x = document.getElementById("success");
  x.style.display = "block";
  x.style.position = "sticky";
  x.style.top = "5em";

    //x.style.display = "block";
 
}

function hide(){
   
  var x = document.getElementById("success");
  x.style.display = "none";
  x.style.position = "absolute";
  x.style.top = "5em";

    //x.style.display = "block";
 
}