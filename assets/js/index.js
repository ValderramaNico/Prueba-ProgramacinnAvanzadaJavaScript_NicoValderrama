import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.js";
import { arrayAnimales } from "./fetchImages.js";
import { validateForm, resetForm } from "./formValidator.js";

const botonRegistrar = document.getElementById("btnRegistrar");
const arrayInstanciados = [];

botonRegistrar.addEventListener("click", () => {
  const nombre = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;

  if (!validateForm(nombre, edad, comentarios)) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const animalData = arrayAnimales.find((animal) => animal.name === nombre);
  let nuevoAnimal;

const animalClasses = {
  "Leon": Leon,
  "Lobo": Lobo,
  "Oso": Oso,
  "Serpiente": Serpiente,
  "Aguila": Aguila
};

if (animalClasses[nombre]) {
  const AnimalClass = animalClasses[nombre];
  nuevoAnimal = new AnimalClass(
    nombre,
    edad,
    animalData.imagen,
    comentarios,
    animalData.sonido
  );
}

  arrayInstanciados.push(nuevoAnimal);
  printCard();
  resetForm();
});

function printCard() {
  const animalesContainer = document.getElementById("Animales");
  animalesContainer.innerHTML = "";

  let animalesHTML = "";

  arrayInstanciados.forEach((animal) => {
    animalesHTML += `
<div class="card" style="width: 18rem;">
  <img id="imageModal" src="assets/img/${animal.img}" class="card-img-top" alt="${animal.nombre}" style="cursor: pointer;">
  <div class="card-body bg-dark">
    <button class="btn btn-secondary btn-play-sound col-12" data-sound="${animal.sonido}"><img style="height: 25px; width: 25px;" src="./assets/img/audio.svg" alt=""></button>
  </div>
</div>
    `;
  });

  animalesContainer.innerHTML = animalesHTML;

  document.querySelectorAll(".btn-play-sound").forEach((button) => {
    button.addEventListener("click", (event) => {
      const animalSound = `assets/sounds/${
        event.target.closest("button").dataset.sound
      }`;
      const player = document.getElementById("player");
      player.src = animalSound;
      player.play();
    });
  });

  document.querySelectorAll(".card-img-top").forEach((img) => {
    img.addEventListener("click", (event) => {
      const animalName = event.target.alt;
      const animal = arrayInstanciados.find(
        (animal) => animal.nombre === animalName
      );

      const modalBody = document.querySelector("#exampleModal .modal-body");
      modalBody.innerHTML = `
        <img src="assets/img/${animal.img}" class="img-fluid" alt="${animal.nombre}">
        <h5 class="text-light text-center mt-3">${animal.nombre}</h5>
        <p class="text-light text-center">Edad: ${animal.edad}</p>
        <p class="text-light text-center">Comentarios: ${animal.comentarios}</p>
      `;

      $("#exampleModal").modal("show");

      const animalSound = `assets/sounds/${animal.sonido}`;
      const player = document.getElementById("player");
      player.src = animalSound;
      player.play();
    });
  });
}
