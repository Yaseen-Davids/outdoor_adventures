// function checkHeight() {
//     var currentScrollPos = document.documentElement.scrollTop;
//     var navHead = document.getElementById("nav_header");

//     if (currentScrollPos < 750) {
//         navHead.style.display = "none";
//         navHead.style.backgroundColor = "#333";

//     }
//     else if (currentScrollPos > 750) {
//         navHead.style.display = "block";
//         navHead.style.opacity = "1";
//     }
// }

// function smoothScroll() {
//     $('html, body').animate({
//         scrollTop: $($(this).attr('href')).offset().top
//     }, 1700);
// }

// ##################################### HIKING CATEGORY #####################################

function showLionInfo() {
    let boxInfo = document.getElementById("infobox");
    let info1Show = document.getElementById("lionshead");
    let info2Show = document.getElementById("skeleton");
    let info3Show = document.getElementById("motte");

    if (info2Show.style.display === "block"){
        info2Show.style.display = "none";
    }

    if (info3Show.style.display === "block"){
        info3Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info1Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info1Show.style.display = "none";
    }

    else {
        boxInfo.style.display = "block";
        info1Show.style.display = "block";
    }
}

function showSkeletonInfo() {
    let boxInfo = document.getElementById("infobox");
    let info1Show = document.getElementById("lionshead");
    let info2Show = document.getElementById("skeleton");
    let info3Show = document.getElementById("motte");

    if (info1Show.style.display === "block"){
        info1Show.style.display = "none";
    }

    if (info3Show.style.display === "block"){
        info3Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info2Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info2Show.style.display = "none";
    } 
        else {
        boxInfo.style.display = "block";
        info2Show.style.display = "block";
    }
}

function showMotteInfo() {
    let boxInfo = document.getElementById("infobox");
    let info1Show = document.getElementById("lionshead");
    let info2Show = document.getElementById("skeleton");
    let info3Show = document.getElementById("motte");

    if (info1Show.style.display === "block"){
        info1Show.style.display = "none";
    }

    if (info2Show.style.display === "block"){
        info2Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info3Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info3Show.style.display = "none";
    } 
        else {
        boxInfo.style.display = "block";
        info3Show.style.display = "block";
    }
}

// ##################################### FISHING CATEGORY #####################################

function showKommetjieInfo() {
    let boxInfo = document.getElementById("infobox2");
    let info1Show = document.getElementById("kommetjie");
    let info2Show = document.getElementById("rooikrans");
    let info3Show = document.getElementById("capepen");

    if (info2Show.style.display === "block"){
        info2Show.style.display = "none";
    }

    if (info3Show.style.display === "block"){
        info3Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info1Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info1Show.style.display = "none";
    }

    else {
        boxInfo.style.display = "block";
        info1Show.style.display = "block";
    }
}

function showRooiInfo() {
    let boxInfo = document.getElementById("infobox2");
    let info1Show = document.getElementById("kommetjie");
    let info2Show = document.getElementById("rooikrans");
    let info3Show = document.getElementById("capepen");

    if (info1Show.style.display === "block"){
        info1Show.style.display = "none";
    }

    if (info3Show.style.display === "block"){
        info3Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info2Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info2Show.style.display = "none";
    }

    else {
        boxInfo.style.display = "block";
        info2Show.style.display = "block";
    }
}

function showCapeInfo() {
    let boxInfo = document.getElementById("infobox2");
    let info1Show = document.getElementById("kommetjie");
    let info2Show = document.getElementById("rooikrans");
    let info3Show = document.getElementById("capepen");

    if (info1Show.style.display === "block"){
        info1Show.style.display = "none";
    }

    if (info2Show.style.display === "block"){
        info2Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info3Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info3Show.style.display = "none";
    }

    else {
        boxInfo.style.display = "block";
        info3Show.style.display = "block";
    }
}