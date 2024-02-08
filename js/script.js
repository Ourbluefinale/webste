document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         
        },
        loop: true,
        autoplay: {
            delay: 4000, // Tiempo en milisegundos entre diapositivas
            disableOnInteraction: false, // Para que el autoplay no se detenga al interactuar con el slider
        },
    });
});

