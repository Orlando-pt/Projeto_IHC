
var ingredients;
$(document).ready(function() {
    $('#first').trigger('click');

    ingredients = localStorage.getItem("ingredientes_disponiveis");

    display_recipe_info(window.location.search.substring(1).split("&")[0].split("=")[1]); // goes to the url and checks wich param has been sent
});

function display_recipe_info(recipe_name) {
    recipe_name = recipe_name.split("_").join(" ");
    $.getJSON("https://api.jsonbin.io/b/5ecffbdf7741ef56a5638e93", function(data) {

        var current_recipe;
        for (var i = 0; i < data.length; i++) {
            current_recipe = data[i];
            console.log(current_recipe);
            if (replace_accent(current_recipe.title).toUpperCase() === recipe_name.toUpperCase()) {
                if (current_recipe.ingredients.length != current_recipe.quantity.length)
                    alert("Erro nas quantidades");
                change_text(current_recipe); // change text on html
                return;
            }
        }

        alert("Recipe not found!\n\tRecipe name: " + recipe_name);
    });
}

function previous_page() {
    window.history.back();
}

function change_text(recipe) {
    console.log(recipe);
    var i;

    // change all the text in html with the given recipe 
    $("#page_title").text(recipe.title);
    $("#p_title").text(recipe.title);
    $("#p_preview").text(recipe.preview);
    //$("#img_recipe").attr("src", "./img/panquecas.jpg"); // TEM DE SER ALTERADO
    $("#img_recipe").attr("src", recipe.image_path);

    // Add the ingredients
    for (i = 0; i < recipe.ingredients.length; i++) {
        console.log(recipe.ingredients[i] + " e " + recipe.quantity[i])
        append_to_London(recipe.ingredients[i], recipe.quantity[i]);
    }
    $("#London").append("</br>");
    $("#London").append("</br>");
    $("#London").append("</br>");

    // Now adding steps
    $("#Paris").append("</br>");
    for (i = 0; i < recipe.steps.length; i++) {
        append_to_Paris(i + 1, recipe.steps[i]);
    }
    $("#Paris").append("</br>");
    $("#Paris").append("</br>");
    $("#Paris").append("</br>");
}

function append_to_London(product, quantity) {

    // caso a página anterior tenha sido a top_10_receitas...
    if (window.location.search.substring(1).split("&")[1].split("=")[1] === "top10") {
        var html_code = "<div class=\"row\">" +
            "<div class=\"col-6\">" +
            "<p style=\"float:left; margin-left: 20%;\">" + product + "</p>" +
            "</div>" +
            "<div class=\"col-6\">" +
            "<p style=\"float: right; margin-right: 20%;\">" + quantity + "</p>" +
            "</div>" +
            "</div>";
    } else if(window.location.search.substring(1).split("&")[1].split("=")[1] === "recipe_search" ) {                                            // caso tenha sido através da pesquisa de receitas...
        var html_code = "<div class=\"row\">" +
            "<div class=\"col-1\">" +
            check_ingredient(product) +
            "</div>" +
            "<div class=\"col-5\">" +
            "<p style=\"float:left; margin-left: 5%;\">" + product + "</p>" +
            "</div>" +
            "<div class=\"col-6\">" +
            "<p style=\"float: right; margin-right: 20%;\">" + quantity + "</p>" +
            "</div>" +
            "</div>";
    } else {
        alert("Unkown previous page");
    }

    $("#London").append(html_code);
}

function append_to_Paris(step_number, step_description) {
    var html_code = "<div class=\"row\">" +
        "<p class=\"mx-auto steps\" style=\"color:rgb(255, 190, 137)\">Passo " + step_number + "</p>" +
        "<p class=\"mx-auto steps\">" + step_description + "</p>" +
        "</div>";

    $("#Paris").append(html_code);
}

function check_ingredient(product) {
    if (!ingredients.includes(product)) 
        return "<i class=\"fas fa-times\"></i>";
    else
        return "<i class=\"fas fa-check\"></i>";
}

function replace_accent(text) {

    var text_norm = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // console.log("Text with accents: " + text + "\n\tAnd now without accents: " + text_norm);
    return text_norm;
}

function openCity(evt, cityName) {
    console.log(cityName);
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.target.className += " active";
}