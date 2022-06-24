// Active navbar 
// to make sure navbar background is white with bottom shadow when scrolled while navbar is sticked at top 

let nav = document.querySelector(".navigation-wrap");

window.onscroll = function() {
   if (document.documentElement.scrollTop > 20){
     nav.classList.add("scroll-on");
   } 
   else {
     nav.classList.remove("scroll-on");
   }
}

// Nav hide on 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse'); // grouping classes in javascript
navBar.forEach(function(event){
  event.addEventListener("click", function(){
    navCollapse.classList.remove("show");
    // bootstrap appends class show to show toggle list 
    // so we are removing it 
  })
}) 

























// // Counter design

// // function interval() {
// //   setTimeout(projectDone, 25);
// // }
//  var interval = setInterval ( projectDone,75);
//  // note setInterval his method returns an interval ID which uniquely identifies the interval,
//  // in this case it will be stored inside interval
//  // so you can remove it later by calling clearInterval().
// let count1 = 1;

// function projectDone() {
//   count1++;
//   document.querySelector(".count1").innerText = count1;
//   if (count1 == 100) {
//     clearInterval(interval);
//   }
// }

// program to stop the setInterval() method after five times

document.addEventListener("DOMContentLoaded", () => {
  const speed = 100;
  function counter(className, start, target) {
    let obj = document.querySelector(className),
      current = start,
      range = target - start,
      inc = range / speed,
      timer = setInterval(function () {
        current = current + Math.floor(inc) +1 ;
        obj.innerText = current;
        if (current > target) {
          clearInterval(timer);
        }
      }, 60);
    // console.log(Math.floor(inc));
  }

  counter(".count1", 1, 159);
  counter(".count2", 1, 91);
  counter(".count3", 6000, 6999);
  counter(".count4", 200, 299);
});
