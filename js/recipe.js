$(document).ready(function() {
    $('#first').trigger('click');

    display_recipe_info(window.location.search.substring(1).split("=")[1]);          // goes to the url and checks wich param has been sent
});

function display_recipe_info(recipe_name) {
    recipe_name = recipe_name.split("_").join(" ");
    $.getJSON("https://api.jsonbin.io/b/5ebad993a47fdd6af162107f/2", function( data ) {

        var current_recipe;
        for (var i = 0; i < data.length; i++) {
            current_recipe = data[i];
            console.log(current_recipe);
            if (replace_accent(current_recipe.title).toUpperCase() === recipe_name.toUpperCase()) {              
                if (current_recipe.ingredients.length != current_recipe.quantity.length)
                    alert("Erro nas quantidades");
                change_text(current_recipe);                            // change text on html
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
    $("#img_recipe").attr("src", "./img/panquecas.jpg");            // TEM DE SER ALTERADO
    // $("#img_recipe").attr("src", recipe.imagem);

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
    var html_code = "<div class=\"row\">" +
                        "<div class=\"col-6\">" +
                            "<p style=\"float:left; margin-left: 20%;\">" + product + "</p>" +
                        "</div>" +
                        "<div class=\"col-6\">" +
                            "<p style=\"float: right; margin-right: 20%;\">" + quantity + "</p>" +
                        "</div>" + 
                    "</div>";

    $("#London").append(html_code);
}

function append_to_Paris(step_number, step_description) {
    var html_code = "<div class=\"row\">" +
                        "<p class=\"mx-auto steps\" style=\"color:rgb(255, 190, 137)\">Passo " + step_number + "</p>" +
                        "<p class=\"mx-auto steps\">" + step_description + "</p>" +
                    "</div>";
    
    $("#Paris").append(html_code);
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
<<<<<<< HEAD:lucas_v/js/recipe.js
    evt.target.className += " active";
=======
    evt.currentTarget.className += " active";
}


function previous_page() {
    window.location.replace('../recepie_landing.html');
>>>>>>> 6a7f0b5e9cf8417a71fbbd5809ab20870da071aa:js/recipe.js
}