/* 
Student name: Ljupco Trajanovski
File name: script.js
Date: 14.04.2022
*/
var videoSource = document.getElementById("vid-src");
var video = document.getElementById("example");
var descriptionSource = document.getElementById("despsrc");

// Hamburger menu fuction

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    }
    else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

// Function to display plank video
function plank() {
    videoSource.src = "./media/plank.mp4";
    // descriptionSource.src = "media/plankdescriptions.vtt"; 
    video.style.display = "block";
    video.load();
}

// Function to display promo code
function discount() {
   
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code:D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}

