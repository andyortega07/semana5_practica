// pedidos.js · Componente visual para una fila del historial.

import crearElemento from "./dom.js";
import { formatoDinero } from "./calculos.js";

export function FilaPedido(pedido) {
  const fila = crearElemento("li", { clase: "fila-pedido" });
  fila.append(
    crearElemento("strong", { texto: `Pedido #${pedido.numero}` }),
    crearElemento("span", { texto: pedido.fecha }),
    crearElemento("span", { texto: pedido.envio }),
    crearElemento("b", { texto: formatoDinero(pedido.total) })
  );
  return fila;
}
