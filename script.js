document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('#navbar a[data-target]');
    const pageContents = document.querySelectorAll('.page-content');
    const introDuration = 3000;

    // Lógica para la pantalla de bienvenida
    if (introScreen && mainContent) {
        setTimeout(() => {
            introScreen.style.opacity = '0';
            
            setTimeout(() => {
                introScreen.style.display = 'none';
                mainContent.style.display = 'block';
            }, 1000);
        }, introDuration);
    } else if (mainContent) {
        mainContent.style.display = 'block';
    }

    // Lógica para cambiar de página sin recargar
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('data-target');

            pageContents.forEach(section => {
                section.classList.remove('active');
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});