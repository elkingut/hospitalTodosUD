const formElementBuscarPacientes = document.getElementById("btn-buscar-paciente");

formElementBuscarPacientes.addEventListener("click", () => {

    fetch('http://localhost:9000/api/pacientes')
    .then(response => response.json())
    .then(data => {
            const pacientes = data.pacientes;
            const tabla = document.createElement("table");
            const encabezados = ["Nombre", "Apellido", "Identificacion", "Edad", "Telefono"];
            const filaEncabezados = document.createElement("tr");
            encabezados.forEach(encabezado => {
              const celdaEncabezado = document.createElement("th");
              celdaEncabezado.textContent = encabezado;
              filaEncabezados.appendChild(celdaEncabezado);
            });
            tabla.appendChild(filaEncabezados);
            pacientes.forEach(paciente => {
              const fila = document.createElement("tr");
              const celdaNombre = document.createElement("td");
              celdaNombre.textContent = paciente.nombre;
              fila.appendChild(celdaNombre);
              const celdaApellido = document.createElement("td");
              celdaApellido.textContent = paciente.apellido;
              fila.appendChild(celdaApellido);
              const celdaIdentificacion = document.createElement("td");
              celdaIdentificacion.textContent = paciente.identificacion;
              fila.appendChild(celdaIdentificacion);
              const celdaEdad = document.createElement("td");
              celdaEdad.textContent = paciente.edad;
              fila.appendChild(celdaEdad);
              const celdaTelefono = document.createElement("td");
              celdaTelefono.textContent = paciente.telefono;
              fila.appendChild(celdaTelefono);
              tabla.appendChild(fila);
            });
            document.body.appendChild(tabla);
     });
})