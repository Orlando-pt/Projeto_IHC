$(document).ready(function() {
    var dict = []; // create an empty array

    dict.push({
        key: "Francesinha",
        value: '<div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 233, 197); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Francesinha</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(255, 190, 69);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 45</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/francesinha.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div>'
    });
    dict.push({
        key: "Almôndegas de Soja c/ molho de tomate",
        value: '<div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(251, 210, 203); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Almôndegas de Soja c/ molho de tomate</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(196, 70, 70);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 40</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/meatball.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div>'
    });
    dict.push({
        key: "Bolo de Chocolate em Caneca",
        value: '<div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 241, 218); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Bolo de Chocolate em Caneca</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(117, 66, 32);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 5</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/cake.png" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div>'
    });
    dict.push({
        key: "Bacalhau com Natas",
        value: '<div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 240, 216); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Bacalhau com Natas</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(248, 219, 180);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 45</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/bacalhau.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div>'
    });
    dict.push({
        key: "Arroz de Marisco",
        value: '<div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 188, 162); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Arroz de Marisco</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(248, 147, 88);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 50</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: rgb(227, 218, 215);"> <img id="imagem" src="img/marisco.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div>'
    });
    dict.push({
        key: "Frango com limão e orégãos",
        value: ' <div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 248, 183); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Frango com limão e orégãos</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(255, 235, 124);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 45</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/frangolimao.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div>'
    });
    dict.push({
        key: "Sushi de Banana",
        value: '<div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 227, 210); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Sushi de Banana</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(226, 199, 175);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 15</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/sushi.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div>'
    });
    dict.push({
        key: "Arroz de Pato",
        value: '<div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(236, 184, 188); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);"></p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(160, 67, 79);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 80</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/pato.jpg" style="width: 100%; height: 100%; cursor:pointer;"> </div> </div> </div> </div>'
    });

    try {
        for (var i = 0; i < localStorage.length; i++) {
            var titulo = JSON.parse(localStorage.getItem(localStorage.key(i))).title;

        }

    } catch (e) {
        // IF no recepies match

    }




    /*function repeatStringNumTimes(string, times) {
        var repeatedString = "";
        while (times > 0) {
            repeatedString += string;
            times--;
        }
        return repeatedString;
    }*/
    /*  try {
          for (var i = 0; i < localStorage.length; i++) {
              var titulo = JSON.parse(localStorage.getItem(localStorage.key(i))).title;
              console.log("Reading recepie " + titulo);
              var cuisine = JSON.parse(localStorage.getItem(localStorage.key(i))).category;
              var ingredientes = JSON.parse(localStorage.getItem(localStorage.key(i))).ingredients;
              var quantidade = JSON.parse(localStorage.getItem(localStorage.key(i))).quantity;
              var tempo = JSON.parse(localStorage.getItem(localStorage.key(i))).time;
              var porcao = JSON.parse(localStorage.getItem(localStorage.key(i))).portions;
              var rating = Math.round(JSON.parse(localStorage.getItem(localStorage.key(i))).rating);
              var passos = JSON.parse(localStorage.getItem(localStorage.key(i))).steps;
              var preview = JSON.parse(localStorage.getItem(localStorage.key(i))).time;
              var imagem = JSON.parse(localStorage.getItem(localStorage.key(i))).imagem;
              var container = '<section id="page"> <div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: #253E66; "> <p id="title" style="margin:initial; text-align: center; color: white;"> ' + titulo + ' </p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:#EF6555;"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> ' + tempo + '</span> mins</p> <p id="estrelas" style="margin:initial;">' + repeatStringNumTimes('<i class=" fas fa-star "></i>', rating) + ' </p> </div > < div class = "row justify-content-center img_div" style = "padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;" > < img id = "imagem" src = "img/b.jpeg" > < /div> </div > < /div> </div > < /section>';
          }

      } catch (e) {
          // IF no recepies match

      }

      */
});