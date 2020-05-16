window.onload = function load_json() {

    for (var i = 0; i < this.localStorage.length; i++) {
        var titulo = JSON.parse(localStorage.getItem(i.toString)).title;
        var cuisine = JSON.parse(localStorage.getItem(i.toString)).category;
        var ingredientes = JSON.parse(localStorage.getItem(i.toString)).ingredients;
        var quantidade = JSON.parse(localStorage.getItem(i.toString)).quantity;
        var tempo = JSON.parse(localStorage.getItem(i.toString)).time;
        var porcao = JSON.parse(localStorage.getItem(i.toString)).portions;
        var rating = JSON.parse(localStorage.getItem(i.toString)).rating;
        var passos = JSON.parse(localStorage.getItem(i.toString)).steps;
        var preview = JSON.parse(localStorage.getItem(i.toString)).time;

        var html_reepie = "":
    }

}