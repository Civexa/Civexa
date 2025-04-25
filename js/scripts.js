document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS con las animaciones de Fade In, Fade Up, etc.
    AOS.init({
      duration: 1000, // Duración por defecto para todas las animaciones
      once: true, // Animaciones solo se ejecutan una vez
      delay: 100, // Retraso por defecto
    });

    // Menú responsive
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const menu = document.getElementById('menu'); // Asegúrate de que el id del menú sea 'menu'

    // Agregar un evento de clic al icono del menú para alternar la clase 'active'
    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active'); // Alternar la visibilidad del menú
      menu.classList.toggle('show'); // Mostrar u ocultar el fondo del menú
    });

    // Cerrar el menú si el usuario hace clic fuera del menú
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        // Si el clic no es ni dentro del menú ni del icono, se cierra el menú
        navLinks.classList.remove('active');
        menu.classList.remove('show');
      }
    });

    // Desplazamiento suave para los enlaces con href="#id"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el desplazamiento instantáneo

        // Obtener el objetivo (elemento) de la sección
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          smoothScrollTo(targetElement); // Ejecutar desplazamiento suave
        }
      });
    });

    // Función para desplazamiento suave con animación
    function smoothScrollTo(targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duración en ms
      let startTime = null;

      function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
      }

      // Función de easing para suavizar el movimiento
      function ease(t, b, c, d) {
        let q = t / d;
        return c * q * (2 - q) + b; // Easing cuadrático
      }

      requestAnimationFrame(scrollAnimation); // Comienza la animación
    }

    // Cambiar el fondo del header al hacer scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        // Si el desplazamiento es mayor a 50px, añadir la clase 'scrolled'
        header.classList.add('scrolled');
      } else {
        // Si el desplazamiento es menor a 50px, quitar la clase 'scrolled'
        header.classList.remove('scrolled');
      }
    });
});

// Efecto de desplazamiento de la descripción
document.addEventListener("DOMContentLoaded", function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('show-description');
      });
      item.addEventListener('mouseleave', () => {
        item.classList.remove('show-description');
      });
    });
  });
  

  
  
  
  
  

  
  

  

  
