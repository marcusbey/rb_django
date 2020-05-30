function openNav() {
  document.getElementById("mySidenav").style.width = "50vw";
  document.getElementById("main").style.marginLeft = "50vw";
  document.getElementById("path").style.stroke = "#FFF";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";

  document.getElementById("mainNav").className.includes("navbar-dark") ?
  document.getElementById("path").style.stroke = "rgba(255, 255, 255, 0.8)" :
  document.getElementById("path").style.stroke = "rgba(0, 0, 0, 0.8)"
}
