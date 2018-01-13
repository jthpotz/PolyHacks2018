// When the user scrolls the page, execute myFunction
var navbar;
var locationbar;
var stickyNav;
var stickyLoc;
var location_pos = 0;
var room_names = ["green_square", "green_square", "green_square", "green_square", "green_square", "green_square", "green_square", "green_square", "green_square", "green_square", "green_square", "green_square"];
window.onscroll = function() {stick()};
window.onload = function() {
    // Get the navbar
    navbar = document.getElementById("navbar");
    console.log(navbar);
    locationbar = document.getElementById("locationbar");

    // Get the offset position of the navbar
    stickyNav = navbar.offsetTop;
    stickyLoc = locationbar.offsetTop;
    
    load_locations();
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

function load_locations(){
    var i = 0;
    var top_row = true;
    
    
    while(i < room_names.length && i < 12){
        var elem = document.createElement("img");
        console.log(room_names[i] + ".png");
        elem.setAttribute("src", room_names[i] + ".png");
        elem.setAttribute("class", "location_icon");
        var div;
        if(i < 6){
            div = document.getElementById("top_loc");
        }
        else{
            div = document.getElementById("bot_loc");
        }
        div.appendChild(elem);
        i++;
    }
    pos = i;
}
