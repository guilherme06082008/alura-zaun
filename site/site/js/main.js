document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
        });
    }

    // Fechar menu ao clicar em um link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('show');
        });
    });

    // Formulário de Reflexões (se existir)
    const reflexoesForm = document.querySelector('#reflexoes-form');
    if (reflexoesForm) {
        reflexoesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui poderia ter lógica para salvar os dados no localStorage
            // ou enviar para um servidor

            alert('Obrigado por compartilhar sua reflexão!');
            reflexoesForm.reset();
        });
    }

    // Adicionar animações aos elementos quando entrarem na viewport
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1
    });

    document.querySelectorAll('.section, .card').forEach(element => {
        if (!element.classList.contains('animate-fade-in')) {
            observer.observe(element);
        }
    });
}); 