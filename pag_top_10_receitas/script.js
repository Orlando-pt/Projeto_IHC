// Alguns emojis
var um = "&#128512";
var dois = "&#128517";
var tres = "&#128528";
var quatro = "&#128531";
var cinco = "&#128552";
var seis = "&#128565";
var unicornio = "&#129412";
var lupa = "&#129488";
var cerebro = "&#129504"

function init() {

    //colocar os cérebros nas dificuldade de forma aleatória (para já)
    var ids = "dificuldade_estrelas";
    for (var i = 1; i < 11; i++) {
        var span_estrela = document.getElementById(ids + i.toString());
        var string_estrela = "";
        for (var ii = 0; ii < Math.floor(Math.random() * 5) + 1; ii++)
            string_estrela += cerebro;

        span_estrela.innerHTML = string_estrela;
    }
}

init();