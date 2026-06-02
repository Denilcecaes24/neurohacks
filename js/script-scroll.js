// Obtén el botón
let mybutton = document.getElementById("backToTopBtn");

// Muestra el botón cuando se desplaza hacia abajo 20px desde la parte superior del documento
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Cuando se hace clic en el botón, se desplaza hacia arriba en la página
mybutton.onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}