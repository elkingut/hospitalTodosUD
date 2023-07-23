const formElementBuscarPacientes = document.getElementById("btn-buscar-paciente");
const nombreInput = document.getElementById("nombre-paciente")
const nombre = nombreInput.value;

formElementBuscarPacientes.addEventListener("click", () => {

    fetch(`http://localhost:9000/api/paciente/${nombre}`)
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
            const fila = document.createElement("tr");
            const celdaNombre = document.createElement("td");
            celdaNombre.textContent = pacientes.nombre;
            fila.appendChild(celdaNombre);
            const celdaApellido = document.createElement("td");
            celdaApellido.textContent = pacientes.apellido;
            fila.appendChild(celdaApellido);
            const celdaIdentificacion = document.createElement("td");
            celdaIdentificacion.textContent = pacientes.identificacion;
            fila.appendChild(celdaIdentificacion);
            const celdaEdad = document.createElement("td");
            celdaEdad.textContent = pacientes.edad;
            fila.appendChild(celdaEdad);
            const celdaTelefono = document.createElement("td");
            celdaTelefono.textContent = pacientes.telefono;
            fila.appendChild(celdaTelefono);
            tabla.appendChild(fila);
            
            document.body.appendChild(tabla);
     });
})