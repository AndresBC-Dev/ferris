/* Codificar las validaciones de usuario */
const formulario = document.getElementById('formregistro');
const nombres = document.getElementById('nombres');
const apellido = document.getElementById('apellido');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const fecha_nacimiento = document.getElementById('fecha_nacimiento');
const correo = document.getElementById('correo');
const identificacion = document.getElementById('identificacion');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

formulario.addEventListener('submit', e => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
    validarInputs();
});

// Función para mostrar errores
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    if (!errorDisplay) {
        const newErrorDisplay = document.createElement('p');
        newErrorDisplay.classList.add('error');
        inputControl.appendChild(newErrorDisplay);
        errorDisplay = newErrorDisplay;
    }
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Función para indicar éxito en la validación
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    if (errorDisplay) {
        errorDisplay.innerText = '';
    }
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Función para validar el formato del correo electrónico
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Función principal para validar los inputs
const validarInputs = () => {
    const nombresValue = nombres.value.trim();
    const apellidoValue = apellido.value.trim();
    const direccionValue = direccion.value.trim();
    const telefonoValue = telefono.value.trim();
    const fecha_nacimientoValue = fecha_nacimiento.value;
    const correoValue = correo.value.trim();
    const identificacionValue = identificacion.value.trim();
    const passwordValue = password.value.trim();
    const confirm_passwordValue = confirm_password.value.trim();

    let isValid = true;

    // Validar nombres
    if (nombresValue === '') {
        setError(nombres, 'El nombre es obligatorio');
        isValid = false;
    } else {
        setSuccess(nombres);
    }

    // Validar apellido
    if (apellidoValue === '') {
        setError(apellido, 'El apellido es obligatorio');
        isValid = false;
    } else {
        setSuccess(apellido);
    }

    // Validar dirección
    if (direccionValue === '') {
        setError(direccion, 'La dirección es obligatoria');
        isValid = false;
    } else {
        setSuccess(direccion);
    }

    // Validar teléfono
    if (telefonoValue === '') {
        setError(telefono, 'El teléfono es obligatorio');
        isValid = false;
    } else if (!/^\d{8,15}$/.test(telefonoValue)) {
        setError(telefono, 'El teléfono debe tener entre 8 y 15 dígitos');
        isValid = false;
    } else {
        setSuccess(telefono);
    }

    // Validar fecha de nacimiento
    if (fecha_nacimientoValue === '') {
        setError(fecha_nacimiento, 'La fecha de nacimiento es obligatoria');
        isValid = false;
    } else {
        setSuccess(fecha_nacimiento);
    }

    // Validar correo electrónico
    if (correoValue === '') {
        setError(correo, 'El correo electrónico es obligatorio');
        isValid = false;
    } else if (!isValidEmail(correoValue)) {
        setError(correo, 'Proporcione un correo electrónico válido');
        isValid = false;
    } else {
        setSuccess(correo);
    }

    // Validar identificación
    if (identificacionValue === '') {
        setError(identificacion, 'La identificación es obligatoria');
        isValid = false;
    } else if (!/^\d+$/.test(identificacionValue)) {
        setError(identificacion, 'La identificación debe contener solo números');
        isValid = false;
    } else {
        setSuccess(identificacion);
    }

    // Validar contraseña
    if (passwordValue === '') {
        setError(password, 'La contraseña es obligatoria');
        isValid = false;
    } else if (passwordValue.length < 6) {
        setError(password, 'La contraseña debe tener al menos 6 caracteres');
        isValid = false;
    } else {
        setSuccess(password);
    }

    // Validar confirmación de contraseña
    if (confirm_passwordValue === '') {
        setError(confirm_password, 'La confirmación de contraseña es obligatoria');
        isValid = false;
    } else if (confirm_passwordValue !== passwordValue) {
        setError(confirm_password, 'Las contraseñas no coinciden');
        isValid = false;
    } else {
        setSuccess(confirm_password);
    }

    // Si todos los campos son válidos, mostrar mensaje de éxito
    if (isValid) {
        alert('Registro exitoso');
        formulario.reset(); // Limpiar el formulario
    }
};

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
} 