var num_1 = 0;
var operatore = "";
var num_2 = 0;
var risultato = 0;
var resto = 0;
var sequenza_input = "";
var stringa_schermo = "";

function scrivi_Cifra(bottone_numerico){
    sequenza_input = sequenza_input + bottone_numerico;
    stringa_schermo = stringa_schermo + bottone_numerico;
    document.getElementById("schermo").setAttribute('value', stringa_schermo);
}

function Somma(){
    num_1 = parseFloat(sequenza_input);
    operatore = "+";
    sequenza_input = "";
    stringa_schermo = stringa_schermo + operatore;
    document.getElementById("schermo").setAttribute('value', stringa_schermo);
}

function Sottrazione(){
    num_1 = parseFloat(sequenza_input);
    operatore = "-";
    sequenza_input = "";
    stringa_schermo = stringa_schermo + operatore;
    document.getElementById("schermo").setAttribute('value', stringa_schermo);
}

function Moltiplicazione(){
    num_1 = parseFloat(sequenza_input);
    operatore = "x";
    sequenza_input = "";
    stringa_schermo = stringa_schermo + operatore;
    document.getElementById("schermo").setAttribute('value', stringa_schermo);
}

function Divisione(){
    num_1 = parseFloat(sequenza_input);
    operatore = "/";
    sequenza_input = "";
    stringa_schermo = stringa_schermo + operatore;
    document.getElementById("schermo").setAttribute('value', stringa_schermo);
}

function Divisione_Intera(){
    num_1 = parseFloat(sequenza_input);
    operatore = "%";
    sequenza_input = "";
    stringa_schermo = stringa_schermo + operatore;
    document.getElementById("schermo").setAttribute('value', stringa_schermo);
}

function Calcola(){
    num_2 = parseFloat(sequenza_input);
    if(operatore == "+"){
        risultato = num_1 + num_2;
        document.getElementById("schermo").setAttribute('value', risultato);
    }
    else if(operatore == "-"){
        risultato = num_1 - num_2;
        document.getElementById("schermo").setAttribute('value', risultato);
    }
    else if(operatore == "x"){
        risultato = num_1 * num_2;
        document.getElementById("schermo").setAttribute('value', risultato);
    }
    else if(operatore == "/"){
        if(num_2 != 0){
            risultato = num_1 / num_2;
        }
        else{
            risultato = "ERROR! DENOM=0!";
        }       
        document.getElementById("schermo").setAttribute('value', risultato);
    }
    else if(operatore == "%"){
        var ans_message = "";
        if(num_2 != 0){
            risultato = Math.trunc(num_1 / num_2);
            resto = num_1 % num_2;
            ans_message = risultato + " resto " + resto;
        }
        else{
            ans_message = "ERROR! DENOM=0!";
        }       
        document.getElementById("schermo").setAttribute('value', ans_message);
    }
    Mantieni_Risultato();
}

function Mantieni_Risultato(){
    num_1 = 0;
    operatore = "";
    num_2 = 0;
    resto = 0;
    sequenza_input = "";
    sequenza_input = sequenza_input + risultato;
    stringa_schermo = "";
    stringa_schermo = stringa_schermo + risultato;
}

function Reset(){
    num_1 = 0;
    operatore = "";
    num_2 = 0;
    risultato = 0;
    resto = 0;
    sequenza_input = "";
    stringa_schermo = "";
    document.getElementById("schermo").setAttribute('value', '');
}
