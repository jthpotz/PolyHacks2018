// When the user scrolls the page, execute myFunction
var navbar;
var locationbar;
var stickyNav;
var stickyLoc;
window.onscroll = function() {stick()};
window.onload = function() {
    // Get the navbar
    navbar = document.getElementById("navbar");
    console.log(navbar);
    locationbar = document.getElementById("locationbar");

    // Get the offset position of the navbar
    stickyNav = navbar.offsetTop;
    stickyLoc = locationbar.offsetTop;
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stick() {
  if (window.pageYOffset >= stickyNav) {
    navbar.classList.add("sticky_nav");
  } else {
    navbar.classList.remove("sticky_nav");
  }
  
  if (window.pageYOffset >= stickyNav) {
    locationbar.classList.add("sticky_loc");
    console.log(locationbar.style.top);
  } else {
    locationbar.classList.remove("sticky_loc");
  }
}

function hide(id) {
    if(typeof(id) == "string"){
        document.getElementById(id).style.display = none;
    }
    else{
        console.log("Not a proper id");
    }
}

function show_flex(id) {
    if(typeof(id) == "string"){
        document.getElementById(id).style.display = flex;
    }
    else{
        console.log("Not a proper id");
    }
}

function change_view(show_id, hide_id){
    hide(hide_id);
    show(show_id);
} 
