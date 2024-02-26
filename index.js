var text = ["Web Devlopment", "Graphic Design","Marketing Team", "Web Sol'n"];
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




$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 2) {
            $('.bgfornav').stop().animate({'margin-top':"2px"},750);
        } else {
            $('.bgfornav').stop().animate({'margin-top':"25px"},750);
        }
    });
});


// drop down css

