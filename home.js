// When the user scrolls the page, execute myFunction
window.onscroll = function() {stick()};

// Get the navbar
var navbar = document.getElementById("navbar");
console.log(navbar);
var locationbar = document.getElementById("locationbar");

// Get the offset position of the navbar
var stickyNav = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stick() {
  if (window.pageYOffset >= stickyNav) {
    navbar.classList.add("sticky");
    Console.log("func stuck");
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset >= stickyNav) {
    navbar.classList.add("sticky");
    Console.log("func stuck");
  } else {
    navbar.classList.remove("sticky");
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
