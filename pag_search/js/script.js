// Get's the search bar's text
var ingredients = [];

function getIngredients() {
    var ings = document.getElementById("search").value;
    ings = ings.split(" ");
    ingredients = new Array();
    for (var i = 0; i < ings.length; i++) {
        ingredients.push(ings[i]);
    }
    console.log(ingredients)


    function readTextFile(file, callback) {
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


    readTextFile("https://api.jsonbin.io/b/5eb47e5f47a2266b14749b38", function(text) {
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
        }

    });
}