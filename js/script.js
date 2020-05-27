var filters = [];
var ingredients = [];

$(document).ready(function() {
    window.localStorage.clear();

    responsive_checkbox();
});

function responsive_checkbox() {
    // Para os filtros
    $(".customFilter").change(function() {
        if (this.checked) {
            filters.push($(this).val());
        } else {
            filters = arrayRemove(filters, $(this).val());
        }
    });

    // Para o resto das checkboxes
    $(".custom").change(function() {
        if (this.checked) {
            ingredients.push($(this).val());
        } else {
            ingredients = arrayRemove(ingredients, $(this).val());
        }
    });
}

function arrayRemove(arr, value) {
    return arr.filter(function(ele) { return ele != value; });
}

// Get's the search bar's text


function getIngredients() {
    var ings = document.getElementById("search").value;

    ings = ings.split(", ");
    ingredients = new Array();
    for (var i = 0; i < ings.length; i++) {
        if (ings[i] != "") {
            ingredients.push(ings[i]);
        }
    }

    console.log(ingredients)
    if (ingredients[0] == "recepie1") {
        ingredients = ["bife de vaca", "queijo", "pão de forma", "salsicha", "linguiça", "fiambre", "sal", "pimenta"];
    }
    if (ingredients[0] == "recepie2") {
        ingredients = ["azeite", "alho", "cebola", "fermento", "pão ralado", "farinha", "soja granulada", "salsa", "oregãos", "sal", "tomate", "açúcar", "manjericão", "massa"];
    }
    if (ingredients[0] == "recepie3") {
        ingredients = ["ovo", "açúcar", "óleo", "farinha", "leite meio-gordo", "chocolate em pó", "fermento em pó"];
    }
    if (ingredients[0] == "recepie4") {
        ingredients = ["batata", "azeite", "bacalhau", "manteiga", "farinha", "leite meio-gordo", "natas", "sal", "noz-moscada", "pimenta", "limão", "alho", "cebelha"];
    }
    if (ingredients[0] == "recepie5") {
        ingredients = ["marisco variado", "cebola", "alho", "azeite", "tomate", "coentros", "água", "sal", "arroz", "limão"];
    }
    if (ingredients[0] == "recepie6") {
        ingredients = ["coxas de frango", "sal", "pimenta", "limão", "alho", "cenoura", "orégãos", "vinho branco", "azeite", "cuscuz"];
    }
    if (ingredients[0] == "recepie7") {
        ingredients = ["banana", "limão", "chocolate preto", "morangos", "coco ralado", "manteiga de amendoim", "granola"];
    }
    if (ingredients[0] == "recepie8") {
        ingredients = ["água", "vinho tinto", "chouriço", "toucinho", "louro", "peito de pato", "sal", "azeite", "cebola", "alho", "polpa de tomate", "arroz agulha", "pimenta preta", "colorau"];
    }
    if (ingredients[0] == "recepie9") {
        ingredients = ["ovo", "sal", "grão", "brócolo", "cebola roxa", "pimentos", "atum em lata", "pimenta", "azeite", "vinagre", "salsa"];
    }
    if (ingredients[0] == "recepie10") {
        ingredients = ["farinha", "açúcar", "fermento em pó", "sal", "ovo", "leite meio gordo", "manteiga"];
    }
    if (ingredients[0] == "recepie11") {
        ingredients = ["salmão", "sal", "pimenta", "alho em pó", "limão", "cenoura", "azeite", "courgette", "cogumelo", "massa", "espinafre", "ananás"];
    }
    if (ingredients[0] == "recepie12") {
        ingredients = ["azeite", "cebola", "alho", "vitela", "vinho branco", "orégãos", "sal", "pimenta", "tomate", "polpa de tomate", "manteiga", "farinha", "leite meio gordo", "massa para lasanha", "mozzarela", "manjericão"];
    }

    if (ingredients[0] == "all") {
        $('#search').val("");

        var aa = document.getElementsByClassName("cat");
        for (var i = 0; i < aa.length; i++) {
            if (aa[i].type == 'checkbox')
                aa[i].checked = true;
        }
        var aa = document.getElementsByClassName("catbtn");
        for (var i = 0; i < aa.length; i++) {

            if (aa[i].innerHTML == 'Done')
                aa[i].click();
        }

        ingredients = ["bife de vaca", "queijo", "pão de forma", "salsicha", "linguiça", "fiambre", "sal", "pimenta", "azeite", "alho", "cebola", "fermento", "pão ralado", "farinha", "soja granulada", "salsa", "oregãos", "sal", "tomate", "açúcar", "manjericão", "massa", "ovo", "açúcar", "óleo", "farinha", "leite meio-gordo", "chocolate em pó", "fermento em pó", "batata", "azeite", "bacalhau", "manteiga", "farinha", "leite meio-gordo", "natas", "sal", "noz-moscada", "pimenta", "limão", "alho", "cebelha", "batata", "azeite", "bacalhau", "manteiga", "farinha", "leite meio-gordo", "natas", "sal", "noz-moscada", "pimenta", "limão", "alho", "cebelha", "marisco variado", "cebola", "alho", "azeite", "tomate", "coentros", "água", "sal", "arroz", "limão", "coxas de frango", "sal", "pimenta", "limão", "alho", "cenoura", "orégãos", "vinho branco", "azeite", "cuscuz", "banana", "limão", "chocolate preto", "morangos", "coco ralado", "manteiga de amendoim", "granola", "ovo", "sal", "grão", "brócolo", "cebola roxa", "pimentos", "atum em lata", "pimenta", "azeite", "vinagre", "salsa", "água", "vinho tinto", "chouriço", "toucinho", "louro", "peito de pato", "sal", "azeite", "cebola", "alho", "polpa de tomate", "arroz agulha", "pimenta preta", "colorau", "farinha", "açúcar", "fermento em pó", "sal", "ovo", "leite meio gordo", "manteiga", "azeite", "cebola", "alho", "vitela", "vinho branco", "orégãos", "sal", "pimenta", "tomate", "polpa de tomate", "manteiga", "farinha", "leite meio gordo", "massa para lasanha", "mozzarela", "manjericão", "salmão", "sal", "pimenta", "alho em pó", "limão", "cenoura", "azeite", "courgette", "cogumelo", "massa", "espinafre", "ananás"];
        for (var i = 0; i < ingredients.length; i++) {
            $('#search').val($('#search').val() + ingredients[i] + ", ");
        }
        console.log("ola");
    }

    // gets the selected cuisine
    var selected_option = $('#cuisine option:selected').filter(':selected').text();
    console.log(selected_option);


    function readJSJON(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    var valid_recepies = []
    var valid_inc_recepies = [];

    readJSJON("https://api.jsonbin.io/b/5ebad993a47fdd6af162107f/2", function(text) {
        var search_ings = ingredients;

        var data = JSON.parse(text); // JSON data from server (JSONbin.io)

        for (var i = 0; i < data.length; i++) { // for each recepie 
            console.log(data[i].ingredients);

            var recepie = data[i]; // holds each recepie's data
            var has_all_ings = true

            var ings_arr = [];

            for (var x = 0; x < recepie.ingredients.length; x++) {
                ings_arr.push(recepie.ingredients[x]);
            }
            for (var x = 0; x < ings_arr.length; x++) { // for each ingredient from recepie
                /*we want to know if all of these ingredients match the one's we searched for
                if they all match the recepie is passed on to the user*/

                if (search_ings.includes(ings_arr[x]) == false) {
                    has_all_ings = false;
                }

            }

            if (has_all_ings) {
                valid_recepies.push(recepie);
            }


            var counter = 0;
            has_all_ings = false;

            // recepies with more than 3 ingredients
            for (var x = 0; x < ings_arr.length; x++) { // for each ingredient from recepie
                /*we want to know if all of these ingredients match the one's we searched for
                if they all match the recepie is passed on to the user*/

                if (search_ings.includes(ings_arr[x])) {
                    counter++;
                    if (counter == 3) {
                        has_all_ings = true;
                    }

                }

            }

            if (has_all_ings) {
                console.log("pushing " + recepie.title);
                valid_inc_recepies.push(recepie);
            }

        }

        if (filters.length != 0) {
            for (var filter = 0; filter < filters.length; filter++) {
                for (var recepie = 0; recepie < valid_recepies.length; recepie++) {
                    if (valid_recepies[recepie].category == filters[filter]) {
                        localStorage.setItem(recepie.toString() + "/INC", JSON.stringify(valid_recepies[recepie]));
                    }
                }

                for (var recepie = 0; recepie < valid_inc_recepies.length; recepie++) {
                    if (valid_inc_recepies[recepie].category == filters[filter]) {
                        for (var r = 0; r < valid_recepies.length; r++) {
                            if (!valid_inc_recepies.includes(valid_recepies[r])) {
                                localStorage.setItem(recepie.toString() + "/COMP", JSON.stringify(valid_inc_recepies[recepie]));
                            }
                        }
                    }
                }

            }
        } else {
            for (var recepie = 0; recepie < valid_recepies.length; recepie++) {
                console.log(valid_recepies[recepie].title + " HAS ALL INGREDIENTS FROM SEARCH");
                localStorage.setItem(recepie.toString() + "/INC", JSON.stringify(valid_recepies[recepie]));
            }
            var includes = false;
            for (var recepie = 0; recepie < valid_inc_recepies.length; recepie++) {
                console.log(valid_inc_recepies[recepie].title + " HAS incomplete INGREDIENTS FROM SEARCH");
                for (var r = 0; r < valid_recepies.length; r++) {
                    if (valid_recepies.includes(valid_inc_recepies[recepie])) {
                        includes = true;
                    }
                }
                if (!includes) {
                    console.log(valid_recepies[recepie] + " IS NOT INCLUDED IN HAS ALL, LETS ADD IT TO INCOMPLETE");
                    localStorage.setItem(recepie.toString() + "/COMP", JSON.stringify(valid_inc_recepies[recepie]));
                }
            }
        }
        window.location.assign("recepie_landing.html");

    });
}