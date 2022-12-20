//Partie 1
$("#myId").text("Hello Word");

//Partie 2
let lien = $("a");
lien.attr("href", "https://fr.wikipedia.org/wiki/Chat");
lien.attr("title", "Les chats");

//Partie 3
let bloc = $("#bloc");
bloc.css("height", "100px");
bloc.css("width", "500px");
bloc.css("background-color", "yellow");

//Partie 3
bloc.children().eq(1).text("Je suis le div numéro 2");
alert(bloc.children().eq(1).index());