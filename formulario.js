emailjs.init('a8H-Lnu4V0LLuB5lR');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formularioSolicitud');
    const btnEnviar = document.getElementById('btnEnviar');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const video = document.getElementById('video').value.trim();

        if (!nombre || !correo || !video) {
            alert('Por favor, completa todos los campos');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert('Por favor, introduce un correo electrónico válido');
            return;
        }

        btnEnviar.disabled = true;
        btnEnviar.textContent = 'Enviando...';

        const templateParams = {
            nombre: nombre,
            correo: correo,
            video: video,
            fecha: new Date().toLocaleString('es-ES')
        };

        emailjs.send('service_c3zf5cz', 'template_f5ld4qv', templateParams)
            .then(function(response) {
                console.log('Email enviado con éxito!', response.status, response.text);

                let solicitudes = JSON.parse(localStorage.getItem('solicitudesVideos')) || [];
                solicitudes.push({
                    id: Date.now(),
                    nombre: nombre,
                    correo: correo,
                    video: video,
                    fecha: new Date().toLocaleString('es-ES'),
                    enviado: true
                });
                localStorage.setItem('solicitudesVideos', JSON.stringify(solicitudes));

                alert('¡Solicitud enviada con éxito! Recibirás una respuesta pronto, ' + nombre + '.');

                form.reset();

                btnEnviar.disabled = false;
                btnEnviar.textContent = 'Enviar solicitud';

            }, function(error) {
                console.error('Error al enviar el email:', error);
                alert('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.');

                btnEnviar.disabled = false;
                btnEnviar.textContent = 'Enviar solicitud';
            });
    });
});