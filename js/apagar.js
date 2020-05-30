var filters = [];
var ingredients = [];

$(document).ready(function() {
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
    return arr.filter(function(ele){ return ele != value; });
}

function replace_accent(text) {

    var text_norm = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // console.log("Text with accents: " + text + "\n\tAnd now without accents: " + text_norm);
    return text_norm;
}

function make_search() {
    localStorage.clear()
    console.log(filters);
    console.log(ingredients);

    var recipes = [];
    
    $.getJSON("https://api.jsonbin.io/b/5ebad993a47fdd6af162107f/2", function( data ) {

        var current_recipe;
        for (var i = 0; i < data.length; i++) {
            current_recipe = data[i];
            console.log(current_recipe);
            if (filters.includes(current_recipe.category) || filters.length === 0) {
                var percentage = check_similar_arr(ingredients, current_recipe.ingredients);

                recipes.push([i, percentage, current_recipe.ingredients.length]);
            }
            
        }

        recipes.sort(function(a, b) {
            var res = b[1] - a[1];
            if (res != 0) {
                return res;                     
            } else {                        // caso o valor em percentagem seja igual
                return a[2] - b[2];         // nesse caso em 1o lugar aparece a receita com menos ingredientes
            }
        });

        if (recipes.length > 15)            // se existirem mais de 15 receitas a dar match
            recipes = recipes.slice(0, 14);           // então retiramos o subarray com as primeiras 15 e ignoramos o resto

        
        localStorage.setItem("receitas" , JSON.stringify(recipes));
        localStorage.setItem("ingredientes_disponiveis", JSON.stringify(ingredients))

        //var url = "recepie_landing.html" + "?param1=" + encodeURIComponent(JSON.stringify(recipes)) + "&param2=" + encodeURIComponent(JSON.stringify(ingredients));
        window.location.assign("recepie_landing.html");
    });
    
    
}

function check_similar_arr(arr_ing, arr_ing_rec) {
    var similar = 0;
    for (var i = 0; i < arr_ing_rec.length; i++) {
        if (arr_ing.includes(arr_ing_rec[i]))
            similar++;
    }
    return similar / arr_ing_rec.length;
}
