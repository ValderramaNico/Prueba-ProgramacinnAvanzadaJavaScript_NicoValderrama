export const arrayAnimales = [];

export async function fetchImages() {
  try {
    const response = await fetch("animales.json");
    if (!response.ok) {
      throw {
        code: response.status,
        message: "Datos solicitados no encontrados",
      };
    }
    const data = await response.json();
    data.animales.forEach((animal) => {
      arrayAnimales.push(animal);
    });
  } catch (error) {
    console.log(error);
  }
}

// Ejecutar fetchImages al cargar el módulo
fetchImages();