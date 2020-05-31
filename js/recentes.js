$(document).ready(function () {
    show_recent_recipes();

});

function show_recent_recipes() {
    $.getJSON("https://api.jsonbin.io/b/5ecffbdf7741ef56a5638e93", function(data) {

        var recent_recipes = JSON.parse(localStorage.getItem("receitas_recentes"));
        console.log(recent_recipes);
        for (var i = 0; i < recent_recipes.length; i++) {
            
            append_html(data[recent_recipes[i]], i + 1);
        }
    });
}

function append_html(recipe, recipe_nr) {
    var html_code = '<div class="container recipe_container_right" style="background-color:rgba(240, 248, 255, 0.774);">' +
    '<div class="row" style="display: flex; flex-wrap:nowrap; flex-direction: row; justify-content: space-between;">' +
        '<div style="width:40%;float:left;">' +
            '<h5 class="titulos_receita" style="margin-top:18%">' + recipe.title + '</h5>' +
        '</div>' +
        '<div style="max-width:60%;float:left;">' +
            '<img style="width:80%; height:auto; margin-top: 6%; margin-bottom: 4%;float:right" src="' + recipe.image_path + '">' +
    '</div>' +
        '</div>' +
    '</div>';

    $("#sec_receitas").append(html_code);
}

