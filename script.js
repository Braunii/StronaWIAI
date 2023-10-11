var dodawanie = false;
var odejmowanie = false;
var mnozenie = false;
var dzielenie = false;
var potegowanie = false;


function pokaz(dzialanie){
    
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

    if (dzialanie == "plus"){
        wynik.innerHTML = "a + b = c";
        dodawanie = true;
        odejmowanie = false;
        mnozenie = false;
        dzielenie = false;
        potegowanie = false;
    }
    else if (dzialanie == "minus"){
        wynik.innerHTML = "a - b = c";
        dodawanie = false;
        odejmowanie = true;
        mnozenie = false;
        dzielenie = false;
        potegowanie = false;
    }
    else if (dzialanie == "iloczyn"){
        wynik.innerHTML = "a * b = c";
        dodawanie = false;
        odejmowanie = false;
        mnozenie = true;
        dzielenie = false;
        potegowanie = false;
    }
    else if (dzialanie == "iloraz"){
        wynik.innerHTML = "a / b = c";
        dodawanie = false;
        odejmowanie = false;
        mnozenie = false;
        dzielenie = true;
        potegowanie = false;
    }
    else if (dzialanie == "do"){
        wynik.innerHTML = "a" + "b".sup() + " = c";
        dodawanie = false;
        odejmowanie = false;
        mnozenie = false;
        dzielenie = false;
        potegowanie = true;
    }
}
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let razy = document.getElementById('razy');
let przez = document.getElementById('przez');
let dopotegi = document.getElementById('dopotegi');

function change(){

    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

    let suma = Number(a) + Number(b);
    let roznica = a - b;
    let iloczyn = a * b;
    let iloraz = a / b;
    let potega = Math.pow(a,b);

    if (a != "" && b == ""){       
        if (dodawanie == true){
            wynik.innerHTML = a + " + b = c";
        }
        else if (odejmowanie == true){
            wynik.innerHTML = a + " - b = c";
        }
        else if (mnozenie == true){
            wynik.innerHTML = a + " * b = c";
        }
        else if (dzielenie == true){
            wynik.innerHTML = a + " / b = c";
        }
        else if (potegowanie == true){
            wynik.innerHTML = a + "b".sup() + " = c";
        }
        else{
            wynik.innerHTML = "Zaznacz działanie";
        }
    }
    else if (a == "" && b == ""){
        if (dodawanie == true){
            wynik.innerHTML = "a + b = c";
        }
        else if (odejmowanie == true){
            wynik.innerHTML = "a - b = c";
        }
        else if (mnozenie == true){
            wynik.innerHTML = "a * b = c";
        }
        else if (dzielenie == true){
            wynik.innerHTML = "a / b = c";
        }
        else if (potegowanie == true){
            wynik.innerHTML = "a" + "b".sup() + " = c";
        }
    }
    else if (a == "" && b != ""){
        if (dodawanie == true){
            wynik.innerHTML = "a + " + b + " = c";
        }
        else if (odejmowanie == true){
            wynik.innerHTML = "a - " + b + " = c";
        }
        else if (mnozenie == true){
            wynik.innerHTML = "a * " + b + " = c";
        }
        else if (dzielenie == true){
            wynik.innerHTML = "a / " + b + " = c";
        }
        else if (potegowanie == true){
            wynik.innerHTML = "a" + b.sup() + " = c";
        }
        else{
            wynik.innerHTML = "Zaznacz działanie";
        }
    }
    else if (a != "" && b != ""){
        if (dodawanie == true){
            wynik.innerHTML = a + " + " + b + " = " + suma;
        }
        else if (odejmowanie == true){
            wynik.innerHTML = a + " - " + b + " = " + roznica;
        }
        else if (mnozenie == true){
            wynik.innerHTML = a + " * " + b + " = " + iloczyn;
        }
        else if (dzielenie == true){
            wynik.innerHTML = a + " / " + b + " = " + iloraz;
        }
        else if (potegowanie == true){
            wynik.innerHTML = a + b.sup() + " = " + potega;
        }
        else{
            wynik.innerHTML = "Zaznacz działanie";
        } 
    }
}

function changecolor(button){
    if (button == "plus"){
        plus.classList.add('active');
        minus.classList.remove('active');
        razy.classList.remove('active');
        przez.classList.remove('active');
        dopotegi.classList.remove('active');
    }
    else if (button == "minus"){
        plus.classList.remove('active');
        minus.classList.add('active');
        razy.classList.remove('active');
        przez.classList.remove('active');
        dopotegi.classList.remove('active');
    }
    else if (button == "razy"){
        plus.classList.remove('active');
        minus.classList.remove('active');
        razy.classList.add('active');
        przez.classList.remove('active');
        dopotegi.classList.remove('active');
    }
    else if (button == "przez"){
        plus.classList.remove('active');
        minus.classList.remove('active');
        razy.classList.remove('active');
        przez.classList.add('active');
        dopotegi.classList.remove('active');
    }
    else if (button == "dopotegi"){
        plus.classList.remove('active');
        minus.classList.remove('active');
        razy.classList.remove('active');
        przez.classList.remove('active');
        dopotegi.classList.add('active');
    }
}

function navbar(page){
    let home = document.getElementById('home_container');
    let calculator = document.getElementById('calculator');

    if (page == "home"){
        home.classList.add('active-navbar');
        calculator.classList.remove('active-navbar');
    }
    else if (page == "calculator"){
        home.classList.remove('active-navbar');
        calculator.classList.add('active-navbar');
    }
}
function autonavbar(){
    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        if (scroll < 500){
            navbar("home");
        }
        else if (scroll >= 500){
            navbar("calculator")
        }
    });
}

setInterval(autonavbar, 0);
navbar("home");