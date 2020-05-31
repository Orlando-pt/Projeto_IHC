$(document).ready(function() {
    show_favs();
});

function show_favs() {
    $.getJSON("https://api.jsonbin.io/b/5ecffbdf7741ef56a5638e93", function(data) {

        var fav_recipes = JSON.parse(localStorage.getItem("receitas_favoritas"));
        console.log(fav_recipes);

        for (var i = 0; i < fav_recipes.length; i++) {
            append_html(data[fav_recipes[i]], i + 1);
        }
    });
}

function append_html(recipe, recipe_nr) {
    var html_code = '<div class="container recipe_container_right" style="background-color:rgba(255, 247, 233, 0.623);">' +
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
