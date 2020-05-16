window.onload = function() {
    window.localStorage.clear();
}

function close_card_filter() {
    var array_checked = $('input[name="filter"]:checked').serialize().split('&');

    if (array_checked.length > 0) {
        var checked_filters = [];

        for (var i = 0; i < array_checked.length; i++) {
            checked_filters.push(array_checked[i].substring("filter".length + 1, array_checked[i].length));
        }

        console.log(checked_filters);

    } else {
        console.log("No selected filters")
    }

}



function close_card(button_id) {
    // para ir buscar o nome da categoria que é o value do botão de fechar
    var nome_cat = $('#' + button_id).val()

    var array_checked = [];
    $('input[name=\"' + nome_cat + '\"]:checked').each(function() {
        var checked_ing = (this.checked ? $(this).val() : "");
        array_checked.push(checked_ing);
    });

    if (array_checked.length > 0) {
        console.log(array_checked);

        for (var i = 0; i < array_checked.length; i++) {
            $('#search').val($('#search').val() + array_checked[i] + ", ");
        }

    } else {
        console.log("No selected check boxes")
    }
}

// Get's the search bar's text
var ingredients = [];

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
    readJSJON("https://api.jsonbin.io/b/5ebad993a47fdd6af162107f/2", function(text) {
        var search_ings = ingredients;

        var data = JSON.parse(text); // JSON data from server (JSONbin.io)


        for (var i = 0; i < data.length; i++) { // for each recepie 

            var recepie = data[i]; // holds each recepie's data

            var has_all_ings = true

            var ings_arr = [];

            for (var x = 0; x < recepie.ingredients.length; x++) {
                ings_arr.push(recepie.ingredients[x]);
            }
            console.log(ings_arr);
            for (var x = 0; x < ings_arr.length; x++) { // for each ingredient from recepie
                /*we want to know if all of these ingredients match the one's we searched for
                if they all match the recepie is passed on to the user*/

                if (search_ings.includes(ings_arr[x]) == false) {
                    has_all_ings = false;
                }

            }
            console.log(has_all_ings);


            if (has_all_ings) {
                valid_recepies.push(recepie);
            }
        }
        for (var recepie = 0; recepie < valid_recepies.length; recepie++) {
            console.log("adding valid recepie");
            localStorage.setItem(recepie.toString(), JSON.stringify(valid_recepies[recepie]));
        }
        window.location.replace("recepie_landing.html");

    });





}