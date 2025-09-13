document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const introDuration = 3000; // Duración de la animación en milisegundos (3 segundos)

    setTimeout(() => {
        // Desvanecer la pantalla de inicio
        introScreen.style.opacity = '0';
        
        // Mostrar el contenido principal después de que la pantalla de inicio se desvanezca
        setTimeout(() => {
            introScreen.style.display = 'none';
            mainContent.style.display = 'block';
            
            // Añadir una pequeña demora para que el contenido principal se desvanezca suavemente
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 50);
        }, 1000); // Espera 1 segundo para que la transición de opacidad termine
    }, introDuration);
});