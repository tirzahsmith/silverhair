$("a").css("color", "white");
$("#nav").css("background-color", "#145");

//change odd list items to background #aaa

$( "li" ).filter( ":nth-child(even)" ).css( "background-color", "#aaa" );

//change even list items to background #ccc

$( "li" ).filter( ":nth-child(odd)" ).css( "background-color", "#ccc" );

//change the value of the input tag myInput to be my first name

$("#myInput").attr("placeholder", "Tirzah");





