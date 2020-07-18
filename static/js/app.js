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


// vars
var listInterval = 5.5;              // interval in seconds after which the thing changes.
var stopTimeout = listInterval*10;   // time after which all this thing-changing nonsense stops.

// doc ready
$(function() {
  // prepare email
  var mailEncrypt=[101,45,109,97,105,108,64,106,97,110,112,97,101,112,107,101,46,100,101];
  var mailAddr = '';
  for (var i=0; i<mailEncrypt.length; i++)
    mailAddr+=String.fromCharCode(mailEncrypt[i]);

  $('#mail-link').attr("href", 'mailto:' + mailAddr + '?subject=Hey there yourself!');

  function newOccupation () {
    var $occupations = $("#occupations li:not(.active)");
    var random = Math.floor(Math.random() * $occupations.length);
    var $choseOne = $occupations.eq(random);
    $("#occupations .active").removeClass("active default");
    $choseOne.addClass("active");
  }

  // init

  var interval = window.setInterval(newOccupation, listInterval * 1000);
  window.setTimeout(function () {
    window.clearInterval(interval);
  }, stopTimeout * 1000);

});
