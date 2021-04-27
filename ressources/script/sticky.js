
var navigations = ["computernav", "mobilenav"];
var header = document.getElementsByClassName("header").item(0);
var sticky = header.offsetHeight;

var mobilenav = document.getElementsByClassName("mobilenav").item(0);
mobilenav.classList.add("relative")
var icon = document.getElementsByClassName("icon").item(0);
icon.classList.add("absolute");

window.onscroll = function() {addSticky()};

function addSticky() {
  for (var i = 0; i < navigations.length; i++){

    var element = document.getElementsByClassName(navigations[i]).item(0);
    if (i == 1) {
      subelement = document.getElementsByClassName("icon").item(0);
      if (window.pageYOffset >= sticky) {
        element.classList.remove("relative");
        element.classList.add("sticky");
        // subelement.classList.add("absolute");
      } else {
        element.classList.add("relative");
        element.classList.remove("sticky");
        // subelement.classList.add("absolute");
      }
    }else {
      if (window.pageYOffset >= sticky) {
        element.classList.add("sticky");
      } else {
        element.classList.remove("sticky");
      }
    }
  }
}
