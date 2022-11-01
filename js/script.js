"use strict";
const btn = document.getElementById("curriculum");

// evento
const mostrarCV = window.addEventListener("scroll", () => {
  const valorScroll = document.documentElement.scrollTop;
  // console.log(valorScroll);

  // condicion para que aparezca el boton de descarga
  valorScroll < 3800
    ? btn.classList.remove("ocultar")
    : btn.classList.add("ocultar");
});

// funcion ejecutora
const descargar = (param) => {
  return param;
};
descargar(mostrarCV);
