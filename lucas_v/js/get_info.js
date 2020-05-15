$(document).ready(function() {
    function repeatStringNumTimes(string, times) {
        var repeatedString = "";
        while (times > 0) {
            repeatedString += string;
            times--;
        }
        return repeatedString;
    }

    function search_img(query) {
        google.load('search', '1');
        google.setOnLoadCallback(OnLoad);
        var search;

        //i suggest instead of this to make keywords list so first to pick random keyword than to do search and pick random image
        var keyword = query;

        function OnLoad() {
            search = new google.search.ImageSearch();

            search.setSearchCompleteCallback(this, searchComplete, null);

            search.execute(keyword);
        }

        function searchComplete() {
            if (search.results && search.results.length > 0) {
                var rnd = Math.floor(Math.random() * search.results.length);

                //you will probably use jQuery and something like: $('body').css('background-image', "url('" + search.results[rnd]['url'] + "')");
                document.body.style.backgroundImage = "url('" + search.results[rnd]['url'] + "')";
            }
        }
    }



    try {
        for (var i = 0; i < localStorage.length; i++) {
            var titulo = JSON.parse(localStorage.getItem(localStorage.key(i))).title;
            console.log("Reading recepie " + titulo);
            var cuisine = JSON.parse(localStorage.getItem(localStorage.key(i))).category;
            var ingredientes = JSON.parse(localStorage.getItem(localStorage.key(i))).ingredients;
            var quantidade = JSON.parse(localStorage.getItem(localStorage.key(i))).quantity;
            var tempo = JSON.parse(localStorage.getItem(localStorage.key(i))).time;
            var porcao = JSON.parse(localStorage.getItem(localStorage.key(i))).portions;
            var rating = Math.round(JSON.parse(localStorage.getItem(localStorage.key(i))).rating);
            var passos = JSON.parse(localStorage.getItem(localStorage.key(i))).steps;
            var preview = JSON.parse(localStorage.getItem(localStorage.key(i))).time;
            var imagem = JSON.parse(localStorage.getItem(localStorage.key(i))).imagem;
            var container = '<section id="page"> <div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: #253E66; "> <p id="title" style="margin:initial; text-align: center; color: white;"> ' + titulo + ' </p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:#EF6555;"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> ' + tempo + '</span> mins</p> <p id="estrelas" style="margin:initial;">' + repeatStringNumTimes('<i class=" fas fa-star "></i>', rating) + ' </p> </div > < div class = "row justify-content-center img_div" style = "padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;" > < img id = "imagem" src = "img/b.jpeg" > < /div> </div > < /div> </div > < /section>';
        }

    } catch (e) {
        // IF no recepies match

    }
});