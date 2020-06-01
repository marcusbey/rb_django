function openNav() {
  var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (screenWidth < 768) {
    document.getElementById("mySidenav").style.height = "50vh";
    document.getElementById("main").style.marginTop = "50vh";
  } else {
  document.getElementById("mySidenav").style.width = "50vw";
  document.getElementById("main").style.marginLeft = "50vw";
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
   }
  document.getElementById("path").style.stroke = "#FFF";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";

  document.getElementById("mainNav").className.includes("navbar-dark") ?
  document.getElementById("path").style.stroke = "rgba(255, 255, 255, 0.8)" :
  document.getElementById("path").style.stroke = "rgba(0, 0, 0, 0.8)";
}


