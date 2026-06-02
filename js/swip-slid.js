var swipers1 = new Swiper(".mySwipers1", {
      spaceBetween: 20,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,

      breakpoints: {
        // Configuración cuando el ancho de la ventana es igual o menor a 400px
        300: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 10, // Espacio entre los slides
        },

    600: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 10, // Espacio entre los slides
    },
    800: {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 10, // Espacio entre los slides
    },
    900: {
        slidesPerView: 5,
        centeredSlides: false,
        spaceBetween: 20, // Espacio entre los slides
    }
}
    });
    var swiper2s2 = new Swiper(".mySwiper2s2", {
      spaceBetween: 10,
      /*navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },*/
      thumbs: {
        swiper: swipers1,
      },
    });