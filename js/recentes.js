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