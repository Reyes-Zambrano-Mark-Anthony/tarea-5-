document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    // Aquí podrías hacer algo con los datos, como enviarlos a un servidor o guardarlos localmente
    console.log('Nombre:', nombre);
    console.log('Correo electrónico:', email);
    console.log('Teléfono:', telefono);

    // Puedes agregar aquí la lógica para enviar los datos a un servidor usando AJAX, por ejemplo
    // Aquí simplemente reiniciaremos el formulario
    document.getElementById('clienteForm').reset();
});
