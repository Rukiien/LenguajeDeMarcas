// ==============================================
// VARIABLES GLOBALES
// ==============================================
const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');
const popup = document.getElementById('sidebarPopup');
const overlay = document.getElementById('overlay');
const mainContent = document.querySelector('.main-content');

// ==============================================
// FUNCIONES DE POPUP
// ==============================================
function openPopup() {
    popup.classList.add('active');
    overlay.classList.add('active');
    if (mainContent) mainContent.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    popup.classList.remove('active');
    overlay.classList.remove('active');
    if (mainContent) mainContent.classList.remove('active');
    document.body.style.overflow = '';
}

// ==============================================
// FUNCIONES DE GESTIÓN DE SESIÓN
// ==============================================
function updateUIForLoggedInUser(user) {
    // Mostrar nombre del usuario
    const userGreeting = document.getElementById('userGreeting');
    if (userGreeting) {
        userGreeting.textContent = `Hola, ${user.name}`;
        userGreeting.style.display = 'block';
    }

    // Ocultar botón de login
    const loginOpenBtn = document.getElementById('openPopup');
    if (loginOpenBtn) loginOpenBtn.style.display = 'none';

    // Mostrar botón de logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
}

function logout() {
    localStorage.removeItem('currentUser');
    alert('Has cerrado sesión');
    location.reload();
}

function checkSession() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        updateUIForLoggedInUser(currentUser);
    }
}

function isUserLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// ==============================================
// FUNCIONES PARA MOSTRAR/OCULTAR CONTRASEÑAS
// ==============================================
function setupPasswordToggle(eyeIconId, passwordInputId) {
    const eyeIcon = document.getElementById(eyeIconId);
    const passwordInput = document.getElementById(passwordInputId);

    if (eyeIcon && passwordInput) {
        eyeIcon.addEventListener('click', function() {
            // Cambiar tipo de input
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.src = 'Imagenes/Unown_ojo_cerrado.png';
                eyeIcon.alt = 'Ocultar contraseña';
            } else {
                passwordInput.type = 'password';
                eyeIcon.src = 'Imagenes/Unown_ojo_abierto.webp';
                eyeIcon.alt = 'Mostrar contraseña';
            }
        });
    }
}

// ==============================================
// CAMBIAR ENTRE FORMULARIOS
// ==============================================
function setupFormToggle() {
    const toggleBtn = document.getElementById('toggleFormBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const popupTitle = document.getElementById('popupTitle');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            if (loginForm.style.display === 'none') {
                // Mostrar login, ocultar registro
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
                popupTitle.textContent = '~Iniciar Sesión~';
                toggleBtn.textContent = 'Crear Cuenta';
            } else {
                // Mostrar registro, ocultar login
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
                popupTitle.textContent = '~Crear Cuenta~';
                toggleBtn.textContent = 'Volver a Inicio de sesión';
            }
        });
    }
}

// ==============================================
// LÓGICA DE REGISTRO
// ==============================================
function setupRegisterForm() {
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('registerName').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;

            // Validaciones
            if (!name || !email || !password || !confirmPassword) {
                alert('Por favor completa todos los campos');
                return;
            }

            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }

            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor ingresa un email válido');
                return;
            }

            // Obtener usuarios existentes del localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Verificar si el email ya está registrado
            const userExists = users.find(user => user.email === email);
            if (userExists) {
                alert('Este email ya está registrado. Por favor inicia sesión.');
                return;
            }

            // Crear nuevo usuario
            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                password: password,
                createdAt: new Date().toISOString()
            };

            // Agregar usuario al array
            users.push(newUser);

            // Guardar en localStorage
            localStorage.setItem('users', JSON.stringify(users));

            alert('¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.');

            // Limpiar formulario
            registerForm.reset();

            // Cambiar a vista de login
            document.getElementById('loginForm').style.display = 'block';
            registerForm.style.display = 'none';
            document.getElementById('popupTitle').textContent = '~Iniciar Sesión~';
            document.getElementById('toggleFormBtn').textContent = 'Crear Cuenta';
        });
    }
}

// ==============================================
// LÓGICA DE LOGIN
// ==============================================
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            // Validaciones básicas
            if (!email || !password) {
                alert('Por favor completa todos los campos');
                return;
            }

            // Obtener usuarios del localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Buscar usuario por email y contraseña
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Login exitoso - Guardar sesión activa
                const session = {
                    userId: user.id,
                    name: user.name,
                    email: user.email,
                    loginTime: new Date().toISOString()
                };

                localStorage.setItem('currentUser', JSON.stringify(session));

                alert('¡Login exitoso! Bienvenido ' + user.name);
                closePopup();

                // Actualizar UI
                updateUIForLoggedInUser(user);

            } else {
                alert('Email o contraseña incorrectos');
            }
        });
    }
}

// ==============================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ==============================================
document.addEventListener('DOMContentLoaded', function() {

    // Verificar sesión activa
    checkSession();

    // Configurar eventos de apertura/cierre del popup
    if (openBtn) {
        openBtn.addEventListener('click', openPopup);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }

    if (overlay) {
        overlay.addEventListener('click', closePopup);
    }

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });

    // Configurar toggles de contraseña
    setupPasswordToggle('eyeIcon', 'password');
    setupPasswordToggle('eyeIconRegister', 'registerPassword');
    setupPasswordToggle('eyeIconConfirm', 'registerConfirmPassword');

    // Configurar cambio entre formularios
    setupFormToggle();

    // Configurar formularios
    setupLoginForm();
    setupRegisterForm();
});

// Hacer la función logout global para que pueda ser llamada desde el HTML
window.logout = logout;