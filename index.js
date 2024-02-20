var text = ["Web Design", "Graphic Design", "Web Sol'n"];
var counter = 0;
var elem = document.getElementById("animated-text");
setInterval(change, 3000);
function change() {
    elem.innerHTML = text[counter];
    setTimeout(function() {
        elem.style.opacity = 0;
        setTimeout(function() {
            counter++;
            if(counter >= text.length) { counter = 0; }
            elem.innerHTML = text[counter];
            elem.style.opacity = 1;
        }, 500);
    }, 500);
}

$(document).ready(function(){
    $(".click-me").click(function(){
        $(this).children("p").slideToggle();
    });
});

$(".click-me").click(function() {
    $(this).find('.plus-path').toggleClass('d-none');
    $(this).find('.minus-path').toggleClass('d-none');
});