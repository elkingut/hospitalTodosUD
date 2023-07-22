const formElementBuscarPacientes = document.getElementById("form-buscar-paciente");

formElementBuscarPacientes.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch('http://localhost:9000/api/pacientes')
})