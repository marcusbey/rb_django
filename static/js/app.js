const mySidePage = document.getElementById("mySidenav");
const main = document.getElementById("main");
const pathLogo = document.getElementById("path");
const mainNav = document.getElementById("mainNav");
const fixedTop = document.querySelector(".fixed-top");

function  fixed(e){
  const element = document.querySelector(e);
  element.style.position = 'fixed';
}

const openNav =()=> {
  const screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (screenWidth < 768) {
    mySidePage.style.height = "50vh";
    main.style.marginTop = "50vh";
  } else {
  mySidePage.style.width = "50vw";
  main.style.marginLeft = "50vw";
//  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
   }
  document.getElementById("path").style.stroke = "#FFF";
  fixedTop.style.zIndex = 0;
  document.querySelector(".closebtn").style.opacity = 1;

};

const closeNav = () => {
  mySidePage.style.width = "0";
  main.style.marginLeft= "0";

  mainNav.className.includes("navbar-dark") ?
  pathLogo.style.stroke = "rgba(255, 255, 255, 0.8)" :
  pathLogo.style.stroke = "rgba(0, 0, 0, 0.8)";
  fixedTop.style.zIndex = 1030;
};


// Add evel listiner to the header.

const url = "../img/about/bg-programming.jpg"
const controller0 = new ScrollMagic.Controller();
const controller1 = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controller3 = new ScrollMagic.Controller();

// TRIGGER 1 : FAde DIV
const changeBackGround = new ScrollMagic.Scene({
  triggerElement: ".about-intro",
  triggerHook: 0.8,
})
  .addIndicators({colorStart: 'blue', colorTrigger: "blue"})
  .on('start', function(){
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        $('.header-cover').css({
          opacity: function() {
            var elementHeight = $(this).height();
            while (scrollTop < elementHeight )
             {
              return 1- (elementHeight - scrollTop) / elementHeight;
            }
          }
        });
      });
    })
  .addTo(controller0);

// svg animation
const path = document.querySelector('.line-path');
const pathLength = path.getTotalLength();
// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;
// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;
path.getBoundingClientRect();
// When the page scrolls...
window.addEventListener("scroll", function(e) {

  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  console.log(scrollPercentage);
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage * 3;
  var toHide = false;
  var scrollDown = false;
  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
  // When complete, remove the dash array, otherwise shape isn't quite sharp
 // Accounts for fuzzy math
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";

  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }

});

// TRIGGER 2 : Unhide about-pitch div
const unHideElement = new ScrollMagic.Scene({
  triggerElement: ".about-pitch",
  triggerHook: 0.3
})
  .addIndicators({colorStart: 'orange', colorTrigger: "orange"})
  .on('start', function(){
    $('.pitch-wrapper').toggleClass('hide ')
  })
  .addTo(controller1);

// TRIGGER 3 : shrink cover div
const openElement = new ScrollMagic.Scene({
  triggerElement: ".about-pitch",
  triggerHook: 0.3
})
  .addIndicators({colorStart: 'green', colorTrigger: "green"})
  .on('start', function(){
    $('.pitch-cover').toggleClass('pitch-cover-shrink')
  })
  .addTo(controller2);


// TRIGGER 4 : Reveal Leading Software
const revealLeading = new ScrollMagic.Scene({
  triggerElement: ".inter-field1",
  triggerHook: 0.5,
  offset: -350,
  reverse: true
})
  .addIndicators({colorStart: 'blue', colorTrigger: "blue"})
  .on('start', function(){
      $('.header-cover').toggleClass('visible');
      $(".leading").html("&gt;<br>Hard <br>skills");
      $(window).scroll(function() {
        var scrollTop2 = $(this).scrollTop();
        $('.visible').css({
          opacity: function() {
            var elementHeight2 = $(this).height();
            return 1- (elementHeight2 - scrollTop2) / elementHeight2;
          }
        });
      });
    })
  .addTo(controller3);












  // if (scrollPercentage >= 0.28971) {
  //   scrollDown = true;
  // }
  // if ((scrollDown === true) && (toHide === false ) && (scrollPercentage >= 0.2220) && (scrollPercentage <= 0.28971)) {
  //   $('.leading').toggleClass("hide");
  //   $(".leading").html("life as a <br>continuous <br>challenge");
  //   toHide = true;
  // }
  // if ((scrollPercentage <= 0.220) && (toHide === true)) {
  //   $('.leading').toggleClass("hide");
  //   toHide = false;
  //   scrollDown = false;

