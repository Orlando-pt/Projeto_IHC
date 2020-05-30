$(document).ready(function () {

    var receitas = JSON.parse(localStorage.getItem("receitas"));
    var ingredients = JSON.parse(localStorage.getItem("ingredientes_disponiveis"));
    
    //console.log(ingredients);

    load_receitas(receitas, ingredients);
});

function load_receitas(receitas, ingredients) {

    $.getJSON("https://api.jsonbin.io/b/5ecffbdf7741ef56a5638e93", function (data) {

        var index_recipe;
        for (var i = 0; i < receitas.length; i++) {
            index_recipe = receitas[i][0];
            console.log(data[index_recipe]);
            append_recipe(data[index_recipe]);
        }

    });
}

function append_recipe(recipe) {                                                                        // onclick="redirect(this.id)"
    var html_code = '<a  href=' + ''.concat('recipe.html?param1=', recipe.title.split(" ").join("_"), '&param2=recipe_search') + '>' +
    '<div class="container" style="padding: 6%; padding-top: 0%;">' + 
        '<div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);">' + 
            '<div class="container" style="background-color: rgb(255, 255, 255);">' + 
                '<div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 233, 197); ">' + 
                    '<p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">' + recipe.title + '</p>' + 
                '</div>' + 
                '<div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(255, 190, 69);">' + 
                    '<p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 45</span> mins</p> <p id="estrelas" style="margin:initial;">' + display_evaluation(5) + '</p>' + // caso se tivesse colocado avaliação no json
                '</div>' + 
                '<div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;">' + 
                    '<img id="imagem" src="' + recipe.image_path + '" style="width: 100%; height: 100%;cursor:pointer;">' + 
                '</div>' + 
            '</div>' + 
        '</div>' + 
    '</div>' + 
    '</a>';

    $('#inc').append(html_code);
}

function replace_accent(text) {

    var text_norm = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // console.log("Text with accents: " + text + "\n\tAnd now without accents: " + text_norm);
    return text_norm;
}

function display_evaluation(eval) {
    var evaluation = '';
    for (var i = 0; i < eval; i++)
        evaluation += '<i class="fas fa-star "></i>';
    
    return evaluation
}