
enigma = new Enigma();
var aux = "A";
var cont = -1;
document.body.onload = writeAlpha;
document.body.onkeyup = keyPressed;


// Facade - Start Button
function init() {
     enigma.defineRotors(getById("ring1"), getById("ring2"), getById("ring3"));
     enigma.defineRings(getById("router1"), getById("router2"), getById("router3"));
     enigma.defineReflector(getById("reflector"));

    document.getElementById("cursor3").innerHTML = enigma.rotors[0][0];
    document.getElementById("cursor2").innerHTML = enigma.rotors[1][0];
    document.getElementById("cursor1").innerHTML = enigma.rotors[2][0];

}


function getById(id) {
    let e = document.getElementById(id);
    return e.options[e.selectedIndex].value;
}

function writeAlpha() {
    for (let x = 1; x <= 3; x++) {
        let e = document.getElementById("ring" + x);
        for (let y = 0; y < enigma.ALPHA.length; y++) {
            let ne = document.createElement("option");
            ne.text = enigma.ALPHA[y];
            e.options.add(ne);
        }
    }
}

// Enigma's keyboard 
function typeBtn(x) {
    typeAction(x);
}

// Real Keyboard
function keyPressed() {
    typeAction((String.fromCharCode(event.keyCode)).toUpperCase());
}

function typeAction(x) {
    if (enigma.ALPHA.indexOf(x) == -1) return;

    try {
        x = enigma.type(x);
        document.getElementById(aux).style.background = "rgba(51, 51, 51, 0.808)";

        aux = x;
        document.getElementById(aux).style.backgroundColor = "#f5d72bd0";
        document.getElementById("cursor3").innerHTML = enigma.rotors[0][0];
        document.getElementById("cursor2").innerHTML = enigma.rotors[1][0];
        document.getElementById("cursor1").innerHTML = enigma.rotors[2][0];
        writeText(aux);

    }
    catch{
        aux = "A";
    }
}

function writeText(x) {
    let e = document.getElementById("message");
    cont++;
    if (cont == 4) {
        x = " " + x;
        cont = 0;
    }

    e.innerHTML = e.value + x;


}

