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

const changeBackGround = new ScrollMagic.Scene({
  triggerElement: ".about-intro",
  triggerHook: 0.8,
  reverse: true
})
  .addIndicators({colorStart: 'blue', colorTrigger: "blue"})
  .on('start', function(){
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        $('.leading').css({
          opacity: function() {
            var elementHeight = $(this).height();
            while (scrollTop < elementHeight - 10)
             {
              return (elementHeight - scrollTop) / elementHeight;
            }
          }
        });
      });
    })
 // .setClassToggle('.about-header','bg-programming')
  .addTo(controller0);


const fixedsoftHeader = new ScrollMagic.Scene({
  triggerElement: ".head-soft",
  triggerHook: 0.09
})
  .addIndicators({colorStart: 'orange', colorTrigger: "orange"})
  .on('start', function(){
    $('.head-soft').toggleClass('about-fixed')
  })
  .addTo(controller2);

const fixedarchHeader = new ScrollMagic.Scene({
  triggerElement: ".head-design",
  triggerHook: 0.09
})
  .addIndicators({colorStart: 'green', colorTrigger: "green"})
  .on('start', function(){
    $('.head-design').toggleClass('about-fixed')
  })
  .addTo(controller3);




















