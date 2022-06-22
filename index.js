// tool tip initial files
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const hour = new Date().getHours();

if(hour < 12 ){
  $("#greetings").text("Good Morning!");
}else if (hour >= 12 && hour < 15) {
  $("#greetings").text("Good Afternoon!");
}else if (hour >= 15 && hour < 20) {
  $("#greetings").text("Good Evening!");
}else{
  $("#greetings").text("Good Night!");
}

window.addEventListener('scroll', revealfn);
function revealfn(){
  var reveals = $(".revealClass");
  for(var i=0; i<reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active');
    }
  }//for

}//function

// on mouse over
// var toogle = false;
// function playsound(){
//   // console.log("insideplaysound");
//   if (!toogle){
//     toogle = true;
//     btnText = document.getElementById("btn").innerHTML = "Pause";
//     console.log(toogle);
//
//     for (var i=0; i< $(".parapl").length; i++) {
//       $(".parapl")[i].addEventListener("mouseover", function (){
//         var audio = new Audio("sounds/crash.mp3");
//         audio.play();
//       });
//
//     }
//
//
//   }else{
//     toogle = false;
//     btnText.toogle;
//     document.getElementById("btn").innerHTML = "Play";
//     console.log(toogle);
//     return;
//   }
//
// }

function playsound(){
  console.log("inside play sound function");
  for (var i=0; i< $(".parapl").length; i++) {
    console.log("inside for loop outside event listner mouseover");
    $(".parapl")[i].addEventListener("mouseover", function (){
      var audio = new Audio("sounds/tap.mp3");
      audio.play();
      console.log("sound playing inside mouseover event listner");
    });
    console.log("inside loop outside event listner after");
  }
  console.log("inside play function outside loop functjion after");
}

function stopsound(){
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
  console.log("inside stop sound");
}

///
  let btn = document.getElementById("btn");
  btn.addEventListener("click", ()=>{
    //play something
    console.log("inside click outside if condition");
      if(btn.innerText=="Play"){
        playsound();
          btnText = document.getElementById("btn").innerHTML = "Pause";
          console.log("inside if first conditon");
      }else{
        stopsound();
          btnText = document.getElementById("btn").innerHTML = "Play";
          console.log("inside  else part");
      }
  })
