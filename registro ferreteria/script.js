document.getElementById('confirm_password').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const errorMessage = document.getElementById('password_error');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block'; // Mostrar mensaje de error
    } else {
        errorMessage.style.display = 'none'; // Ocultar mensaje de error
    }
});

document.getElementById('formregistro').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const errorMessage = document.getElementById('password_error');
    const successMessage = document.getElementById('success_message');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block'; // Mostrar mensaje de error
        successMessage.style.display = 'none'; // Ocultar mensaje de éxito
        event.preventDefault(); // Evitar que el formulario se envíe
    } else {
        errorMessage.style.display = 'none'; // Ocultar mensaje de error
        successMessage.style.display = 'block'; // Mostrar mensaje de éxito
        event.preventDefault(); // Evitar que el formulario se envíe (solo para demostración)
    }
});