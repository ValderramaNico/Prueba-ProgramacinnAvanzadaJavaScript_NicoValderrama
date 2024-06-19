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
    return data.animales;
  } catch (error) {
    console.log(error);
  }
}
