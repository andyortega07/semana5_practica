// almacenamiento.js · Guarda y recupera el estado de la tienda.

const CLAVE = "tienda-tech-estado";

export function guardar(estado) {
  localStorage.setItem(CLAVE, JSON.stringify(estado));
}

export function cargar() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE));
    return datos && typeof datos === "object" ? datos : {};
  } catch {
    return {};
  }
}
