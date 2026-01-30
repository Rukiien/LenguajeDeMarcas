document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openPopup');
    const closeBtn = document.getElementById('closePopup');
    const popup = document.getElementById('sidebarPopup');
    const overlay = document.getElementById('overlay');
    const mainContent = document.querySelector('.main-content');

    // Abrir pop-up
    openBtn.addEventListener('click', function() {
        popup.classList.add('active');
        overlay.classList.add('active');
        mainContent.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Cerrar pop-up
    closeBtn.addEventListener('click', function() {
        closePopup();
    });

    overlay.addEventListener('click', function() {
        closePopup();
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });

    function closePopup() {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        mainContent.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Mostrar/ocultar contraseña CON PNG
const eyeIcon = document.getElementById('eyeIcon');
const passwordInput = document.getElementById('password');

eyeIcon.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Cambiar icono
    if (type === 'password') {
        eyeIcon.src = 'Imagenes/Unown_ojo_abierto.webp';
        eyeIcon.alt = 'Mostrar contraseña';
        eyeIcon.classList.remove('closed');
    } else {
        eyeIcon.src = 'Imagenes/Unown_ojo_cerrado.png';
        eyeIcon.alt = 'Ocultar contraseña';
        eyeIcon.classList.add('closed');
    }
});


// Login form submit
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulación login exitoso
    if (email && password) {
        alert('¡Login exitoso! Bienvenido ' + email);
        closePopup(); // Cierra el pop-up
        // Aquí iría tu lógica real de login
    } else {
        alert('Por favor completa todos los campos');
    }
});
