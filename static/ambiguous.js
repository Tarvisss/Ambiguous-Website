// Dom elements
const $time  = $("#time");
const $greeting = $("#greeting");
const $name = $("#name");
const $focus = $("#focus");
const $BgGreet = $("#BgGreet");
const navBar = document.querySelector("nav")
const menuBtns = document.querySelectorAll(".menu-icon")
const overlay = document.querySelector(".overlay")

console.log(menuBtns);
//display Menu options
menuBtns.forEach(menuBtn => {
   menuBtn.addEventListener("click", () => {
      navBar.classList.toggle("open");
   })
}); 

overlay.addEventListener("click", () => {
   navBar.classlist.remove("open");
})




//options
const showAmPm = true;

//show Time Function

const showTime = () =>{
let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //set am or pm
    const amPm = hour >= 12 ? 'PM' : "AM";

    //12 hour Format
     hour = hour % 12 || 12;

    //Ouitput Time You can toggle on and off if you would like to see the time displayed
   //   time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ""}`;

    setTimeout(showTime, 1000);
}


// add Zeros to min and sec
const addZero = (n) =>{
    return (parseInt(n, 10) < 10 ? "0" : "" ) + n;
}


// set Background and Greeting
const setBgGreet = () =>{
    let today = new Date(),
     hour = today.getHours();

     if(hour < 12){
        //Morning
        document.body.style.backgroundImage = "url('static/milad-fakurian-_S-zZyQiOr8-unsplash.jpg')";
        document.body.style.backgroundSize = "cover";
        $greeting.text("Good Morning");
        document.body.style.color = "white";

     }else if(hour < 18){
        //afternoon
        document.body.style.backgroundImage = "url('static/shttefan-B7XNN9uNAh8-unsplash.jpg')";
        document.body.style.backgroundSize = "cover";
        $greeting.text("Good Afternoon");

     }else{
        //evening
        document.body.style.backgroundImage = "url('static/shttefan-B7XNN9uNAh8-unsplash.jpg')";
        document.body.style.backgroundSize = "cover";
        
        $greeting.text("Good Evening");
        

     }
}



// Run ShowTimw Function
// showTime();

// Run BgGreet
setBgGreet();

// starts the particle effect on load
window.onload = function() {
   Particles.init({
     selector: '.background'
   });
 };
