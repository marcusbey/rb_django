var mySidePage = document.getElementById("mySidenav");
var main = document.getElementById("main");
var pathLogo = document.getElementById("path");
var mainNav = document.getElementById("mainNav");
var fixedTop = document.querySelector(".fixed-top");

function  fixed(e){
  var element = document.querySelector(e);
  element.style.position = 'fixed';
}

var openNav =()=> {
  var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
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

var closeNav = () => {
  mySidePage.style.width = "0";
  main.style.marginLeft= "0";

  mainNav.className.includes("navbar-dark") ?
  pathLogo.style.stroke = "rgba(255, 255, 255, 0.8)" :
  pathLogo.style.stroke = "rgba(0, 0, 0, 0.8)";
  fixedTop.style.zIndex = 1030;
};


// Add evel listiner to the header.
const url = "../img/about/bg-programming.jpg"
const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();

const changeBackGround = new ScrollMagic.Scene({
  triggerElement: ".float-box",
  triggerHook: 0.9
})
  .addIndicators({colorStart: 'blue', colorTrigger: "blue"})
  .on('start', function(){
    $('.leading').toggleClass('hide');
  })
  .setClassToggle('.about-header','bg-programming')
  .addTo(controller);

const fixedFielHeader = new ScrollMagic.Scene({
  triggerElement: ".about-field",
  triggerHook: 0.09
})
  .addIndicators({colorStart: 'orange', colorTrigger: "orange"})
  .on('start', function(){
    $('.leading-field').toggleClass('about-field-fixed')
  })
  .addTo(controller2);
