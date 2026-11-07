# Facturador 5.0 · Carrito modular

Aplicación web modular para administrar un catálogo, carrito de compras, cálculo de totales e historial de pedidos.

## Evidencias solicitadas

### Sources: 7 módulos base

La carpeta `js/` contiene los siete módulos base de la aplicación:

```text
js/
├── datos.js
├── calculos.js
├── dom.js
├── componentes.js
├── estado.js
├── render.js
└── main.js
```

Además, para los retos de ampliación se añadieron `almacenamiento.js` y `pedidos.js`.

### Pedido confirmado

Se verificó en el navegador un pedido confirmado correctamente:

```text
✅ Pedido #001 confirmado por $28.75. ¡Gracias por tu compra!
```

La confirmación también se registra en el panel **Historial de pedidos** y se conserva mediante `localStorage`.

### Inteligencia artificial utilizada

Sí se utilizó inteligencia artificial: **ChatGPT/Codex**, como apoyo para integrar los módulos, revisar las importaciones y preparar la prueba de funciones puras. La revisión y comprobación final se realizó sobre la aplicación ejecutándose en el navegador.

## Prueba funcional

Abrir [pruebas.html](./pruebas.html) para comprobar que seis teclados con envío a Cuenca producen un total de **166.75**.
