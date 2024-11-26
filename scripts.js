//Iniciar AOS
AOS.init();
// Seleccionar el header
const header = document.getElementById('header');

// Detectar el desplazamiento de la página
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Cuando se baja más de 50px
        header.classList.add('scrolled'); // Añadir la clase 'scrolled'
    } else {
        header.classList.remove('scrolled'); // Eliminar la clase 'scrolled' cuando se vuelve a la parte superior
    }
});

//Carrusel Mis Trabajos
let currentIndex = 0;

function moveCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  const carouselContainer = document.querySelector('.carousel-container');

  currentIndex = (currentIndex + 1) % totalItems;
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambia el carrusel cada 5 segundos
setInterval(moveCarousel, 5000);

  

  
