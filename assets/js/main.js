


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:false,
    smartSpeed:2000,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(function(){
    $(".owl-carousel").on('changed.owl.carousel', function(e) {
        // Check if the viewport width is greater than 768px
        if(window.innerWidth > 768) {
            // Get the current active slide
            var current = e.relatedTarget.relative(e.item.index);
            // Check if the third slide is active
            if(current == 2) { // Index is 0 based
                // Change the src attribute of the img tag
                $('.nav__logo.h1 img').attr('src', 'assets/img/favicondrk.png');
            } else {
                // Change it back to the original when not on the third slide
                $('.nav__logo.h1 img').attr('src', 'assets/img/favicon.png');
            }
        }
    });
});









