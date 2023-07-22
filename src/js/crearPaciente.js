const formElementPacientes = document.getElementById("form-pacientes");

formElementPacientes.addEventListener("submit", (event) => {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let identificacion = document.getElementById("identificacion").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;
    let paciente = {nombre : nombre, apellido : apellido, identificacion : identificacion, edad : edad, telefono: telefono}
    let pacienteJson = JSON.stringify(paciente);
    // console.log(pacienteJson)

    fetch('http://localhost:9000/api/pacientes', {
        method: 'Post',
        body: pacienteJson
    }).then(response => {
        if (response.ok) {
            // Mostrar modal de confirmación
            mostrarModalConfirmacion();
        } else {
            // Manejar error
            response.text().then(errorMessage => {
                const modal = document.getElementById("modal-error");
                const mensaje = document.getElementById("mensaje-error");
                mensaje.textContent = errorMessage;
                modal.style.display = "block";
    
                // Código para cerrar el modal después de un tiempo determinado
                setTimeout(() => {
                    modal.style.display = "none";
                }, 5000);
            });
        }
    })
    .catch(error => {
        // Manejar error
        const modal = document.getElementById("modal-error");
        const mensaje = document.getElementById("mensaje-error");
        mensaje.textContent = error.message;
        modal.style.display = "block";
    
        // Código para cerrar el modal después de un tiempo determinado
        setTimeout(() => {
            modal.style.display = "none";
        }, 5000);
    });

    function mostrarModalConfirmacion() {
        const modal = document.getElementById("modal-confirmacion");
        const mensaje = document.getElementById("mensaje-confirmacion");
        mensaje.textContent = "Paciente Creado";
        modal.style.display = "block";

        setTimeout(() => {
            modal.style.display = "none";
        }, 3000);
    }
    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("identificacion").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("telefono").value = "";

})
