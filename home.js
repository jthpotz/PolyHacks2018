// When the user scrolls the page, execute myFunction
var navbar;
var locationbar;
var stickyNav;
var stickyLoc;
var location_pos = 0;
var category_pos = 0;
var room_text;
var room_names = ["Master Bathroom", "Bathroom", "Master Bedroom", "Kid\'s Bedroom", "Living Room", "Kitchen"];
var category_names = ["Furniture", "Electronics", "Personal Items", "Office Supplies", "Plants"];
var category_text;
var room_box;
var cat_box;
var cur_choice = "Room";
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
    load_category();
    room_text = document.getElementById("room");
    category_text = document.getElementById("category");
    room_box = document.getElementById("room_list");
    cat_box = document.getElementById("category_list");
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
    
    
    while(i < room_names.length && i < 6){
        var elem = document.createElement("img");
        console.log("icons/rooms/" + room_names[i] + ".png");
        elem.setAttribute("src", "icons/rooms/" + room_names[i] + ".jpg");
        elem.setAttribute("class", "location_icon");
        elem.setAttribute("onclick", "set_room(\"" + room_names[i] + "\")");
        var div;
        if(i < 3){
            div = document.getElementById("top_loc");
        }
        else{
            div = document.getElementById("bot_loc");
        }
        div.appendChild(elem);
        i++;
    }
    location_pos = i;
}

function load_category(){
    var i = 0;
    var top_row = true;
    
    
    while(i < category_names.length && i < 6){
        var elem = document.createElement("img");
        console.log("icons/tags/" + category_names[i] + ".png");
        elem.setAttribute("src", "icons/tags/" + category_names[i] + ".jpg");
        elem.setAttribute("class", "location_icon");
        elem.setAttribute("onclick", "set_category(\"" + category_names[i] + "\")");
        var div;
        if(i < 3){
            div = document.getElementById("top_cat");
        }
        else{
            div = document.getElementById("bot_cat");
        }
        div.appendChild(elem);
        i++;
    }
    category_pos = i;
}

function set_room(name){
    room_text.innerHTML = "Room: " + name;
    room_box.style.display = "none";
    cat_box.style.display = "flex";
}

function set_category(category){
    category_text.innerHTML = "Category: " + category;
    cat_box.style.display = "none";
}

function reset(){
    room_text.innerHTML = "Room: None Selected";
    category_text.innerHTML = "Category: None Selected";
    room_box.style.display = "flex";
    cat_box.style.display = "none";
}
