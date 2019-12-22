class Enigma {


    // DEFAULT CONFIGURATION ENIGMA (ONLY READ)
    ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    RING_I = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
    RING_II = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
    RING_III = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
    RING_IV = "ESOVPZJAYQUIRHXLNFTGKDCMWB";
    RING_V = "VZBRGITYUPSDNHLXAWMJQOFECK";

    REFLECTOR_A = "EJMZALYXVBWFCRQUONTSPIKHGD";
    REFLECTOR_B = "YRUHQSLDPXNGOKMIEBFZCWVJAT";
    REFLECTOR_C = "FVPJIAOYEDRZXWGCTKUQSBNMHL";

    // VARIABLES TO WRITE
    rotors = [];
    rings = [];
    reflector = "";
    cursors = "";


    PLUGS = [
        ["A","O"],
        ["B","R"],
        ["C","D"],
        ["E","Z"],
        ["F","I"],
        ["G","W"],
        ["H","X"],
        ["J","L"],
        ["K","P"],
        ["M","N"],
        ["Q","Y"],
        ["S","U"],
        ["T","V"]
    ];

    defineRotors(a, b, c) {
        if (a == null || b == null || c == null)  return;
        
        this.cursors = a+b+c;
        this.rotors.push(this.adapterRotors(this.ALPHA.indexOf(a)));
        this.rotors.push(this.adapterRotors(this.ALPHA.indexOf(b)));
        this.rotors.push(this.adapterRotors(this.ALPHA.indexOf(c)));
    }

    defineReflector(letter){
        if (letter == null) return;

        let str = "this.REFLECTOR_"+letter;
        this.reflector = eval(str);
    }

    defineRings(a, b, c){
        if (a == null || b == null || c == null) return;

        this.rings.push(eval("this.RING_"+a));
        this.rings.push(eval("this.RING_"+b));
        this.rings.push(eval("this.RING_"+c));
    }

    adapterRotors(initial) {
        let rotor = "";
        for (let x = initial; x < 26; x++) {
            rotor += this.ALPHA[x];
        }
        for (let x = 0; x < initial; x++) {
            rotor += this.ALPHA[x];
        }
        return rotor.trim();
    }

    findPosition(rotor, letter){
        for(let r in rotor){
            if(rotor[r] == letter)  return r;
        }
    }

    type(letter){
        if(letter == null)  return;
        
        let x = this.findPlug(letter);
        x = this.findPosition(this.ALPHA, x);
        
        for(let r in this.rotors){
            x = this.rotors[r][x];
            x = this.findPosition(this.rings[r], x);
        }
        x = this.reflector[x];
        x = this.findPosition(this.ALPHA, x);
        
        for(let n = this.rotors.length-1; n >= 0; n--){
            x = this.rings[n][x];
            x = this.findPosition(this.rotors[n], x);
        }
        x = this.ALPHA[x];
        x = this.findPlug(x);
        this.move();
        return x;
    }


    findPlug(letter){
        for(let index in this.PLUGS){
            if(this.PLUGS[index][0] == letter)        return this.PLUGS[index][1];
            else if(this.PLUGS[index][1] == letter)   return this.PLUGS[index][0];
            else                                 continue;
        }
    }
    
    move(){
        let x = this.rotors[0][0];
        this.rotors[0]= this.rotors[0].substr(1);
        this.rotors[0]+=x;
        if(this.rotors[0][0] == this.cursors[0]){
            x = this.rotors[1][0];
            this.rotors[1]= this.rotors[1].substr(1);
            this.rotors[1]+=x;
            if(this.rotors[1][0] == this.cursors[1]){
                x = this.rotors[2][0];
                this.rotors[2]= this.rotors[2].substr(1);
                this.rotors[2]+=x;   
            }   
        }
    }
}