$(document).ready(function(){
    // Iniciar animações AOS
    AOS.init({
        once: true,
        offset: 100,
    });

    $(window).scroll(function(){
        // Navbar sticky
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
        $('.navbar .menu').removeClass("active");
        $('.menu-btn').removeClass("active");
    });

    // Efeito de digitação (Typing effect)
    var typed = new Typed(".typing", {
        strings: ["Flores Raras.", "Beleza Exótica.", "Rosas Exclusivas."],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Flores Raras.", "Beleza Exótica.", "Rosas Exclusivas."],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    // Menu Toggle (Mobile)
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });

    // Owl Carousel (Flores)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2500,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
