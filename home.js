// When the user scrolls the page, execute myFunction
var navbar;
var locationbar;
var headerbar;
var stickyNav;
var stickyLoc;
var location_pos = 0;
var category_pos = 0;
var room_text;
var room_names = ["Master Bathroom", "Bathroom", "Master Bedroom", "Kid\'s Bedroom", "Living Room", "Kitchen"];
var category_names = ["Furniture", "Electronics", "Personal Items", "Office Supplies", "Plants"];
var item_names = ["Bookshelf", "Cabinet", "Clock", "Dresser", "Lamp", "Painting", "Pillow", "Rug"];
var category_text;
var room_box;
var cat_box;
var room;
var category;
var cur_choice = "Room";
var choice_text;
//window.onscroll = function() {stick()};
window.onload = function() {
    // Get the navbar
    navbar = document.getElementById("navbar");
    console.log(navbar);
    locationbar = document.getElementById("locationbar");
    headerbar = document.getElementById("headerbar");

    // Get the offset position of the navbar
    stickyNav = navbar.offsetTop;
    stickyLoc = locationbar.offsetTop;
    
    load_locations();
    load_category();
    load_items();
    room_text = document.getElementById("room");
    category_text = document.getElementById("category");
    room_box = document.getElementById("room_list");
    cat_box = document.getElementById("category_list");
    choice_text = document.getElementById("choice");
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
  } else {
    locationbar.classList.remove("sticky_loc");
  }
  
  if (window.pageYOffset >= stickyNav) {
    headerbar.classList.add("sticky_head");
  } else {
    headerbar.classList.remove("sticky_head");
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

function load_items(){
    var i = 0;
    var top_row = true;
    
    
    while(i < item_names.length && i < 6){
        var elem = document.createElement("img");
        elem.setAttribute("src", "icons/items/" + item_names[i] + ".jpg");
        elem.setAttribute("class", "location_icon");
        elem.setAttribute("onclick", "select_item(\"" + item_names[i] + "\")");
        var div;
        if(i < 3){
            div = document.getElementById("top_item");
        }
        else{
            div = document.getElementById("bot_item");
        }
        div.appendChild(elem);
        i++;
    }
    category_pos = i;
}

function set_room(name){
    room_text.innerHTML = "Room: " + name;
    //room_box.style.display = "none";
    //cat_box.style.display = "flex";
    scroll("category_list");
    room = name;
    cur_choice = "Category";
    update_section_text(cur_choice);
}

function set_category(name){
    category_text.innerHTML = "Category: " + name;
    //cat_box.style.display = "none";
    scroll("item_list");
    category = name;
    cur_choice = "Item";
    update_section_text(cur_choice);
}

function select_item(name){
    scroll("item");
}

function reset(){
    room_text.innerHTML = "Room: None Selected";
    category_text.innerHTML = "Category: None Selected";
    scroll("room_list");
    //room_box.style.display = "flex";
    //cat_box.style.display = "none";
    category = null;
    room = null;
    cur_choice = "Room";
    update_section_text(cur_choice);
}

function update_section_text(update){
    choice_text.innerHTML = update;
}

function jump_cat(){
    if(!(cur_choice == "Room")){
        category_text.innerHTML = "Category: None Selected";
        //room_box.style.display = "none";
        //cat_box.style.display = "flex";
        cur_choice = "Category";
        update_section_text(cur_choice);
        scroll("category_list");
    }
}

function scroll(to_where){
    $('html:not(:animated), body:not(:animated)').animate({
            scrollTop: ($("#" + to_where).offset().top)-140
        }, 2000);
}
