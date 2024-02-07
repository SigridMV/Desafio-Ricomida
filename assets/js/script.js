const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Evento click
$("#enviarCorreo").on("click", function(){
  alert("Correo enviado correctamente...")
});

// Evento dblclick
$("#ingredientes, #preparacion").on("dblclick", function(){
  $(this).css("color", "red");
});

// Evento click
$(".card-title").on("click", function() {
  // Toggle
  $(this).siblings(".card-text").toggle();
});
