const formElementBuscarPacientes = document.getElementById("form-buscar-paciente");

formElementBuscarPacientes.addEventListener("submit", (event) => {
    event.preventDefault();
        fetch('http://localhost:9000/api/pacientes')
    // .then(response => response.json())
    // .then(data => {
    //      // Crear tabla
    //      const table = document.createElement('table');
    //      table.innerHTML = `
    //          <thead>
    //              <tr>
    //                  <th>Nombre</th>
    //                  <th>Apellido</th>
    //                  <th>Edad</th>
    //                  <th>Identificación</th>
    //                  <th>Teléfono</th>
    //              </tr>
    //          </thead>
    //          <tbody>
    //              ${data.map(paciente => `
    //                  <tr>
    //                      <td>${paciente.nombre}</td>
    //                      <td>${paciente.apellido}</td>
    //                      <td>${paciente.edad}</td>
    //                      <td>${paciente.identificacion}</td>
    //                      <td>${paciente.telefono}</td>
    //                  </tr>
    //              `).join('')}
    //          </tbody>
    //      `;
 
    //      // Mostrar tabla en la página
    //      const tableContainer = document.getElementById('table-container');
    //      tableContainer.innerHTML = '';
    //      tableContainer.appendChild(table);
    //  })
    // .catch(error => {
    //      console.error(error);
    //  });
})