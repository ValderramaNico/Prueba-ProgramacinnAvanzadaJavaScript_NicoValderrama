export function validateForm(animal, edad, comentarios) {
  return (
    animal !== "Seleccione un animal" &&
    edad !== "Seleccione un rango de años" &&
    comentarios.trim() !== ""
  );
}

export function resetForm() {
  document.getElementById("animal").value = "Seleccione un animal";
  document.getElementById("edad").value = "Seleccione un rango de años";
  document.getElementById("comentarios").value = "";
}
