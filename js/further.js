
/*
 Control sidebar(open close)  
*/
function sidebar() {
    if (document.getElementById("sidebar").style.display == "block") {
        document.getElementById("sidebar").style.display = "none";
    } else {
        document.getElementById("sidebar").style.display = "block";
    }
}

/*
 message Function  
*/
function message(message, time = 0){
    if(document.getElementById("alert")){
        hidden(document.getElementById("alert"), 0);
    }
    let m = document.createElement("div");
    m.className = ("alert");
    m.id = "alert";

    let l = document.createElement("span");
    l.className = "closebtn";
    l.innerHTML = "&times;";
    l.onclick = function(){
         hidden(document.getElementById("alert"), 0);
     }
    m.appendChild(l);

    l = document.createElement("label");
    l.innerHTML = message;
    m.appendChild(l);

    document.body.append(m);
    if (time == 0) {
        hidden(document.getElementById('alert'), 1500);
    } else {
        hidden(document.getElementById('alert'), time);
   }
}
/*
    Image
*/
function openImg(imageDOM){

    let modal = document.createElement("div");
    modal.className = "modal";
    modal.onclick = function(){
        hidden(this, 0);

    }

    l = document.createElement("img");
    l.className = "modal-content";
    l.src = imageDOM.src;
    modal.appendChild(l);

    l = document.createElement("div");
    l.id = "caption";
    l.innerHTML = imageDOM.alt;
    modal.appendChild(l);

    modal.style.display = "block";
    document.body.appendChild(modal);
}




/*
    Control Tab
*/
function openTab(tab_name) {
    let tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    document.getElementById(tab_name).style.display = "block";
}

/*
    Music control
*/

function playMusic(){
    let music = document.getElementById("music");
    music.play();
}
function pauseMusic(){
    let music = document.getElementById("music");
    music.pause();
}
function loadMusic(){
    let music = document.getElementById("music");
    music.load();
    playMusic();
}


/*
    hidden
*/
function hidden(e, time) {
    setTimeout(function () {
        try {
            document.body.removeChild(e);
        } catch{
        }
    }, time);
}