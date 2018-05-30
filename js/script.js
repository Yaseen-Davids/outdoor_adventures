// ##################################### HIKING CATEGORY #####################################

function showLionInfo() {
    // window.scrollTo(0, 1371.4249877929688);
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
        goToHike();
    }

    else {
        boxInfo.style.display = "block";
        info1Show.style.display = "block";
        window.scrollTo({ 
            top: info1Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
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
        goToHike();
    } 
        else {
        boxInfo.style.display = "block";
        info2Show.style.display = "block";
        window.scrollTo({ 
            top: info2Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
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
        goToHike();
    } 
        else {
        boxInfo.style.display = "block";
        info3Show.style.display = "block";
        window.scrollTo({ 
            top: info3Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
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
        goToFish();
    }

    else {
        boxInfo.style.display = "block";
        info1Show.style.display = "block";
        window.scrollTo({ 
            top: info1Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
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
        goToFish();
    }

    else {
        boxInfo.style.display = "block";
        info2Show.style.display = "block";
        window.scrollTo({ 
            top: info2Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
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
        goToFish();
    }

    else {
        boxInfo.style.display = "block";
        info3Show.style.display = "block";
        window.scrollTo({ 
            top: info3Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
    }
}

// ##################################### ROCK CLIMBING CATEGORY #####################################

function showRocklandsInfo() {
    let boxInfo = document.getElementById("infobox3");
    let info1Show = document.getElementById("rocklands");
    let info2Show = document.getElementById("tablemountain");
    let info3Show = document.getElementById("paarl");

    if (info2Show.style.display === "block"){
        info2Show.style.display = "none";
    }

    if (info3Show.style.display === "block"){
        info3Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info1Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info1Show.style.display = "none";
        goToRock();
    }

    else {
        boxInfo.style.display = "block";
        info1Show.style.display = "block";
        window.scrollTo({ 
            top: info1Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
    }
}

function showTablemountInfo() {
    let boxInfo = document.getElementById("infobox3");
    let info1Show = document.getElementById("rocklands");
    let info2Show = document.getElementById("tablemountain");
    let info3Show = document.getElementById("paarl");

    if (info1Show.style.display === "block"){
        info1Show.style.display = "none";
    }

    if (info3Show.style.display === "block"){
        info3Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info2Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info2Show.style.display = "none";
        goToRock();
    }

    else {
        boxInfo.style.display = "block";
        info2Show.style.display = "block";
        window.scrollTo({ 
            top: info2Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
    }
}

function showPaarlInfo() {
    let boxInfo = document.getElementById("infobox3");
    let info1Show = document.getElementById("rocklands");
    let info2Show = document.getElementById("tablemountain");
    let info3Show = document.getElementById("paarl");

    if (info1Show.style.display === "block"){
        info1Show.style.display = "none";
    }

    if (info2Show.style.display === "block"){
        info2Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info3Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info3Show.style.display = "none";
        goToRock();
    }

    else {
        boxInfo.style.display = "block";
        info3Show.style.display = "block";
        window.scrollTo({ 
            top: info3Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
    }
}

// ##################################### CAMPING CATEGORY #####################################

function showSecretInfo() {
    let boxInfo = document.getElementById("infobox4");
    let info1Show = document.getElementById("secretfalls");
    let info2Show = document.getElementById("beaverlac");
    let info3Show = document.getElementById("wolfkop");

    if (info2Show.style.display === "block"){
        info2Show.style.display = "none";
    }

    if (info3Show.style.display === "block"){
        info3Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info1Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info1Show.style.display = "none";
        goToCamp();
    }

    else {
        boxInfo.style.display = "block";
        info1Show.style.display = "block";
        window.scrollTo({ 
            top: info1Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
    }
}

function showBeaverlacInfo() {
    let boxInfo = document.getElementById("infobox4");
    let info1Show = document.getElementById("secretfalls");
    let info2Show = document.getElementById("beaverlac");
    let info3Show = document.getElementById("wolfkop");

    if (info1Show.style.display === "block"){
        info1Show.style.display = "none";
    }

    if (info3Show.style.display === "block"){
        info3Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info2Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info2Show.style.display = "none";
        goToCamp();
    }

    else {
        boxInfo.style.display = "block";
        info2Show.style.display = "block";
        window.scrollTo({ 
            top: info2Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
    }
}

function showWolfInfo() {
    let boxInfo = document.getElementById("infobox4");
    let info1Show = document.getElementById("secretfalls");
    let info2Show = document.getElementById("beaverlac");
    let info3Show = document.getElementById("wolfkop");

    if (info1Show.style.display === "block"){
        info1Show.style.display = "none";
    }

    if (info2Show.style.display === "block"){
        info2Show.style.display = "none";
    }

    if (boxInfo.style.display === "block" && info3Show.style.display === 'block'){
        boxInfo.style.display = "none";
        info3Show.style.display = "none";
        goToCamp();
    }

    else {
        boxInfo.style.display = "block";
        info3Show.style.display = "block";
        window.scrollTo({ 
            top: info3Show.offsetTop - 300,
            left: 0, 
            behavior: 'smooth' 
          });
    }
}

function showCatMenu() {
    let showMenu = document.getElementById("categoryMenu");

    if (showMenu.style.display === "block"){
        showMenu.style.display = "none";
    }
    else{
        showMenu.style.display = "block";
    }
}

// ########################## COPYRIGHT SMOOTH SCROLL ##########################
function goToHike() {
    let ypos = document.getElementById("goToHike").offsetTop;
    window.scrollTo({ 
        top: ypos - 100,
        left: 0, 
        behavior: 'smooth'
    });
}

function goToFish() {
    let ypos = document.getElementById("goToFish").offsetTop;
    window.scrollTo({ 
        top: ypos - 100,
        left: 0, 
        behavior: 'smooth'
    });
}

function goToRock() {
    let ypos = document.getElementById("goToRock").offsetTop;
    window.scrollTo({ 
        top: ypos - 100,
        left: 0, 
        behavior: 'smooth'
    });
}

function goToCamp() {
    let ypos = document.getElementById("goToCamp").offsetTop;
    window.scrollTo({ 
        top: ypos - 100,
        left: 0, 
        behavior: 'smooth'
    });
}

function hideCatMenu() {
    document.getElementById("categoryMenu").style.display = "none";
}

function takeMeHome() {
    window.scrollTo({ 
        top: 0,
        left: 0, 
        behavior: 'smooth'
    });
}

function submitForm() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let user_email = document.forms["myForm"]["email"].value;
    let userSelect = document.forms["myForm"]["user_select"].value;

    if ((fname != "") && (lname != "") && (user_email != "") && (userSelect != "")){
        alert("Thank You, We'll get back to you Asap");
    }
}

onscroll = function helper() {
    let helperBox = document.getElementById("ads_bar");
    let catSection = document.getElementById("goToHike").offsetTop - 400;
    let userScroll = window.scrollY;
    
    if (userScroll > catSection){
        helperBox.style.opacity = "1";
        helperBox.style.transition = "all 0.7s";
    }
    else if (userScroll < catSection) {
        helperBox.style.opacity = "0";
        helperBox.style.transition = "all 0.7s";
    }
}