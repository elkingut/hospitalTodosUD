const formElementPacientes = document.getElementById("form-doctores");

formElementPacientes.addEventListener("submit", (event) => {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let especialidad = document.getElementById("especialidad").value;
    let consultorio = document.getElementById("consultorio").value;
    let correo = document.getElementById("correo").value;
    let doctor = {nombre : nombre, apellido : apellido, especialidad : especialidad, consultorio : consultorio, correo: correo}
    let doctorJson = JSON.stringify(doctor);

    fetch('http://localhost:9000/api/doctores', {
        method: 'Post',
        body: doctorJson
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
        mensaje.textContent = "Doctor Creado";
        modal.style.display = "block";

        setTimeout(() => {
            modal.style.display = "none";
        }, 3000);
    }
    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("especialidad").value = "";
    document.getElementById("consultorio").value = "";
    document.getElementById("correo").value = "";

})
