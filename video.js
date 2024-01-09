// Selecciona el botón y los elementos de video y preloader del DOM
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

// Agrega un evento de clic al botón
btn.addEventListener('click', function() {
    // Verifica si el botón no tiene la clase 'slide'
    if(!btn.classList.contains('slide')) {
        // Si no tiene la clase 'slide', la agrega
        btn.classList.add('slide');
        // Pausa la reproducción del video
        video.pause();
    } else {
        // Si tiene la clase 'slide', la remueve
        btn.classList.remove('slide');
        // Reproduce el video
        video.play();
    }
})

// Agrega un evento de carga a la ventana
window.addEventListener('load', function() {
    // Cuando la ventana se carga completamente, oculta el preloader
    preloader.classList.add('hide-preloader');
})
