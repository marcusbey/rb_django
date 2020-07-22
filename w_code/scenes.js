

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
        const scrollTop = $(this).scrollTop();
        $('.header-cover').css({
          opacity: function() {
            const elementHeight = $(this).height();
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

  const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  // Length to offset the dashes
  const drawLength = pathLength * scrollPercentage * 3;
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
let toHide = false;
let scrollDown = false;

const revealLeading = new ScrollMagic.Scene({
  triggerElement: ".inter-field1",
  triggerHook: 0.5,
  offset: -350,
  reverse: true
})
  .addIndicators({colorStart: 'blue', colorTrigger: "blue"})
  .on('start', function(){
      scrollDown = !scrollDown;
      if (scrollDown === true) {
        $('.header-cover').toggleClass('visible');
        $(".leading").html("&gt;<br>Hard <br>skills");
        $(window).scroll(function() {
          console.log(scrollDown + ' hard skills');
          const scrollTop2 = $(this).scrollTop();
          $('.visible').css({
            opacity: function() {
              const elementHeight2 = $(this).height();
              return (elementHeight2 - scrollTop2) / elementHeight2;
            }
          });
        });
      } else if (scrollDown === false) {
        console.log(scrollDown + 'this is false state show challenges');
        $(".leading").html("life as a <br>continuous <br>challenge");
      }
    })
  .addTo(controller3);




