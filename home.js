var config = {
	    apiKey: "AIzaSyC1z04EdgPXvIr5mqivsnL-R_7fjJy6VvQ",
	    authDomain: "polyhacks2018-b1eb4.firebaseapp.com",
	    databaseURL: "https://polyhacks2018-b1eb4.firebaseio.com",
	    projectId: "polyhacks2018-b1eb4",
	    storageBucket: "polyhacks2018-b1eb4.appspot.com",
	    messagingSenderId: "1077238902059"
	  };
	  firebase.initializeApp(config);
        var config = {
	    // ...
	  };
	  if (!firebase.apps.length) {
		    firebase.initializeApp({});
	  }


// When the user scrolls the page, execute myFunction
var navbar;
var locationbar;
var headerbar;
var stickyNav;
var stickyLoc;
var location_pos = 0;
var category_pos = 0;
var item_pos = 0;
var room_text;
var room_names = ["Master Bathroom", "Bathroom", "Master Bedroom", "Kid Bedroom", "Living Room", "Kitchen"];
var category_names = ["Furniture", "Electronics", "Personal Items", "Office Supplies", "Plants", "Games"];
var item_names = ["Bookshelf", "Cabinet", "Clock", "Dresser", "Lamp", "Painting", "Pillow", "Rug"];
var category_text;
var room_box;
var cat_box;
var room = null;
var category = null;
var cur_choice = "Room";
var choice_text;
var max_per_slide = 6;

var myItems = [];
var filteredItems = [];
var myRooms = [];
var myCategories = [];
var myItemNames = [];
var allItems = [];

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
    
    
    room_text = document.getElementById("room");
    category_text = document.getElementById("category");
    room_box = document.getElementById("room_list");
    cat_box = document.getElementById("category_list");
    choice_text = document.getElementById("choice");
    
    
    getData();
    
    
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
    
    console.log("src", "icons/rooms/" + myRooms[i] + ".jpg");
    while(i < myRooms.length && i < max_per_slide){
        var elem = document.createElement("img");
        
        elem.setAttribute("src", "icons/rooms/" + myRooms[i] + ".jpg");
        elem.setAttribute("onmouseover", "this.src='icons/rooms/rooms_hover/" + myRooms[i] + ".jpg'");
        elem.setAttribute("onmouseout", "this.src='icons/rooms/" + myRooms[i] + ".jpg'");
        elem.setAttribute("class", "location_icon");
        elem.setAttribute("onclick", "set_room(\"" + myRooms[i] + "\")");
        var div;
        if(i < max_per_slide/2){
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
    console.log("src", "icons/tags/" + myCategories[i] + ".jpg");
    while(i < myCategories.length && i < max_per_slide){
        var elem = document.createElement("img");
        
        elem.setAttribute("src", "icons/tags/" + myCategories[i] + ".jpg");
        elem.setAttribute("onmouseover", "this.src='icons/tags/tags_hover/" + myCategories[i] + ".jpg'");
        elem.setAttribute("onmouseout", "this.src='icons/tags/" + myCategories[i] + ".jpg'");
        elem.setAttribute("class", "location_icon");
        elem.setAttribute("onclick", "set_category(\"" + myCategories[i] + "\")");
        var div;
        if(i < max_per_slide/2){
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
    var i = item_pos;
    var top_row = true;
    
    console.log("src", "icons/items/" + myItemNames[i] + ".jpg");
    while(i < myItemNames.length && i < max_per_slide){
        var elem = document.createElement("img");
        
        elem.setAttribute("src", "icons/items/" + myItemNames[i] + ".jpg");
        elem.setAttribute("onmouseover", "this.src='icons/items/items_hover/" + myItemNames[i] + ".jpg'");
        elem.setAttribute("onmouseout", "this.src='icons/items/" + myItemNames[i] + ".jpg'");
        elem.setAttribute("class", "location_icon");
        elem.setAttribute("onclick", "select_item(\"" + myItemNames[i] + "\")");
        var div;
        if(i < max_per_slide/2){
            div = document.getElementById("top_item");
        }
        else{
            div = document.getElementById("bot_item");
        }
        div.appendChild(elem);
        i++;
    }
}

function set_room(name){
    room_text.innerHTML = "Room: " + name;
    //room_box.style.display = "none";
    //cat_box.style.display = "flex";
    scroll("category_list");
    room = name;
    category_text.innerHTML = "Category: None Selected";
    cur_choice = "Category";
    update_section_text(cur_choice);
    load_items();
    filterBy("Room", name);
}

function set_category(name){
    category_text.innerHTML = "Category: " + name;
    //cat_box.style.display = "none";
    scroll("item_list");
    category = name;
    cur_choice = "Item";
    update_section_text(cur_choice);
    load_items();
    filterBy("Category", name);
}

function select_item(name){
    scroll("item");
    putDataInField();
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
    load_items();
    filteredItems = myItems;
    myItemNames = allItems;
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
        load_items();
        filteredItems = myItems;
        filterBy("Room", room);
    }
}

function scroll(to_where){
    $('html:not(:animated), body:not(:animated)').animate({
            scrollTop: ($("#" + to_where).offset().top)-140
        }, 2000);
}







function putDataInField(searchUID) {

    var item_main_labels = document.getElementById("item_main_labels");
    var item_main_fields = document.getElementById("item_main_fields");
    var item_rest_box    = document.getElementById("item_rest_box");

    for (var i = 0; i < filteredItems.length; i++) {

        if (myItems[i]["uid"] == searchUID) {

            Object.keys(myItems[i]).forEach(function(key) {

                if (key == "Room" || key == "Category" || key == "Price Each" || key == "Quantity") {
                    $(item_main_fields).append("<input type='text' value='"+ myItems[i][key] +"' name='"+ myItems[i][key] +"'/></input><br>");
                    $(item_main_labels).append("<H3>"+ key +"</H3>");

                } else if (key != "uid") {
                    $(item_rest_box).append("<H3>"+ key +"</H3><input type='text' value='"+ myItems[i][key] +"' name='"+ myItems[i][key] +"'/></input>");
                }

            });

        }

    }

}

function getData() {
    // my houeshold uid
    var uid = "ec133965-fb53-24f8-c4e8-7083b35fd918";


    firebase.database().ref('Households/' + uid + '/Items').once('value').then(function(snapshot) {

        var mri = 0;
        var mci = 0;

        //console.log(snapshot.val());
        var item_main_labels = document.getElementById("item_main_labels");
        var item_main_fields = document.getElementById("item_main_fields");
        var item_rest_box    = document.getElementById("item_rest_box");

        var i = 0;
        var thisDict = [];
        snapshot.forEach(function(child) {
            thisDict = [];
            //console.log("clearing dict");
            var key = child.key;
            myItems[i++] = child;
            

            thisDict["uid"] = child.key;

            //document.write("*****" + key + "*****<br>");
            child.forEach(function(child) {
                var key = child.key;
                /*
                if (key == "Room" || key == "Category" || key == "Price Each" || key == "Quantity") {
                    $(item_main_fields).append("<input type='text' value='"+child.val()+"' name='"+child.val()+"'/></input><br>");
                    $(item_main_labels).append("<H3>"+ key +"</H3>");

                } else {
                    $(item_rest_box).append("<H3>"+ key +"</H3><input type='text' value='"+child.val()+"' name='"+child.val()+"'/></input>");
                }
                */

                if (key == "Room") {
                    var thisRoom = child.val();
                    if (myRooms.indexOf(thisRoom) == -1) {
                        myRooms[mri++] = thisRoom;
                    }
                } else if (key == "Category") {
                    var thisCat = child.val();
                    if (myCategories.indexOf(thisCat) == -1) {
                        myCategories[mci++] = thisCat;
                    }
                }

                thisDict[child.key] = child.val();
                //console.log("pushing key for value: " + key + " " + child.val());

            });

            //console.log("pushing to arr");
            if (thisDict != []) {
                myItems.push(thisDict);
            }

            //allItems[i-1] = myItems[i-1]["Name"];
            //console.log(myItems[i-1]["Name"]);
            //console.log(myItems[i-1]);
            
        });

        //myItemNames = allItems;
        
        filteredItems = myItems;
        //getRooms();
        console.log("my rooms: ");
        for (var i = 0; i < myRooms.length; i++) {
            console.log(myRooms[i]);
        }

        console.log("my categories: ");
        for (var i = 0; i < myCategories.length; i++) {
            console.log(myCategories[i]);
        }

        //putDataInField();


        myItems.forEach(function(child) {
            var str = JSON.stringify(child, null, 4);
            if (thisDict != []) {
                console.log(str);
            }

        });

    iNames();
    load_locations();
    load_category();
    load_items();
        
    });
    
    
}
/*
function getRooms() {

    var mri = 0;
    for (var i = 0; i < filteredItems.length; i++) {
        var thisRoom = filteredItems[i]["Room"];
        console.log("this room: " + thisRoom);
        if (myRooms.indexOf(thisRoom) != -1) {
            console.log("adding: " + thisRoom);
            myRooms[mri++] = thisRoom;
        }
        console.log("indexOf:" + myRooms.indexOf(thisRoom));
    }

    console.log("myRooms: " + myRooms.toString());

}
*/
function filterBy(key, value) {

    //var key = prompt("Category: ");
    //var value = prompt("Value: ");
    var newFilteredItems = [];
    var newMyItems = [];
    
    
    var nfic = 0

    for (var i = 0; i < filteredItems.length; i++) {
        console.log("checking value: " + value + " against myItems[i][key]: " + filteredItems[i][key]);
        if (filteredItems[i][key] == value) {
            console.log("found one: " + filteredItems[i]["uid"]);
            //newFilteredItems.append(myItems[i]);
            newFilteredItems[nfic++] = filteredItems[i];
            newMyItems[nfic-1] = filteredItems[i]["Name"];
        }
    }

    filteredItems = newFilteredItems;
    myItemNames = newMyItems;

    for (var i = 0; i < filteredItems.count; i++) {
        console.log("filtered uids: " + filteredItems);
    }

}

function getItemInfo(stuff) {
    return JSON.stringify(stuff, null, 4); // (Optional) beautiful indented output.
}

function writeUserData() {
  firebase.database().ref('Households/ec133965-fb53-24f8-c4e8-7083b35fd920').set({
    username: "hello",
    email: "email",
    profile_picture : "imageUrl"
  });
}

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

function iNames(){
    var i = 0;
    for(;i < myItems.length; i++){
        allItems[i] = myItems[i]["Name"];
        console.log(myItems[i]["Name"]);
        console.log(myItems[i]);
    }
}