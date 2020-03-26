var formulario = document.querySelector(".needs-validation");
var alert = document.querySelector("#alertRow");
var form = document.getElementById("formulario");

function submitFormValidado() {
  event.preventDefault();

  document.location.hash = "ultimoParrafo";
  alert.style.setProperty("display", "block");

  setTimeout(function() {
    form.submit();
  }, 2500);
}

formulario.addEventListener("submit", function(event) {
  if (formulario.checkValidity() === true) {
    submitFormValidado();
  } else if (formulario.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  formulario.classList.add("was-validated");
});

// swal("Mensaje enviado", "Le responderemos a la brevedad", "success");
