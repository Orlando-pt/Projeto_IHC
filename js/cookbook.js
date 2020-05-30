$(document).ready(function() {
    show_favs();

    $(".titulos_receita").click(function(event) {
        click_recipe_text(event);
    });

    $(".receita_imagem").click(function(event) {
        click_recipe_id(event);
    });
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
    var html_code = '<div class="container recipe_container_right">' +
        '<div class="row" style="display: flex; flex-wrap:nowrap; flex-direction: row; justify-content: space-between;">' +
            '<div>' +
                '<h5 class="titulos_receita">#' + recipe_nr + ' ' + recipe.title + '</h5>' +
            '</div>' +
            '<div>' +
                '<img src="' + recipe.image_path + '" class="receita_imagem">' +
        '</div>' +
            '</div>' +
        '</div>';

    $("#sec_receitas").append(html_code);
}
