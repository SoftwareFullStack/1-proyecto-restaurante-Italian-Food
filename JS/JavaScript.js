/* DESCLARACION DE VARIABLES */
/* BOTON PARA BOTON PARA ABRIR Y CERRAR EL MENU RESPONSIVE */
let btnOpenMenu = document.getElementById("btnOpenMenu");
let btnCloseMenu = document.getElementById("btnCloseMenu");
let menuReponsive = document.getElementById("menuBar");
/* ENLACES DEL MENU RESPONSIVE */
let enlaces = document.getElementById("enlaces");

/* CLIC EN EL BOTON PARA ABRIR EL MENU RESPONSIVE */
btnOpenMenu.addEventListener("click", function () {
  menuReponsive.classList.add("activo");
});

/* CLIC EN EL BOTON PARA CERRAR EL MENU RESPONSIVE */
btnCloseMenu.addEventListener("click", function () {
  menuReponsive.classList.remove("activo");
});

/* CERRAR MENU RESPONSIVE CON LOS ENLACES DEL MENU DE NAVEGACION */
enlaces.addEventListener("click", function () {
  menuReponsive.style.transitionDelay = "0.5s";
  menuReponsive.classList.remove("activo");
});

/* SLIDER DE PRODUCTOS */
let contenedor = document.querySelector(".slider");
let btnIzquierda = document.getElementById("btnIzquierda");
let btnDerecha = document.getElementById("btnDerecha");

/* EVENTO PARA EL BOTON A LA DERECHA */
btnDerecha.addEventListener("click", function () {
  contenedor.scrollLeft += contenedor.offsetWidth;
});

/* EVENTO PARA EL BOTON A LA IZQUIERDA */
btnIzquierda.addEventListener("click", function () {
  contenedor.scrollLeft -= contenedor.offsetWidth;
});

/* VALIDACIÓN DE FORMULARIO */
let formulario = document.getElementById("formulario");

function validar(e) {
  let inputNombre = document.getElementById("nombre");
  let inputEmail = document.getElementById("email");
  let inputComents = document.getElementById("comentarios");

  let alertaExito = document.getElementById("alertaExito");
  let alertaError = document.getElementById("alertaError");

  if (
    inputNombre.value == 0 ||
    inputEmail.value == 0 ||
    inputComents.value == 0
  ) {
    e.preventDefault();
    alertaError.classList.remove("hide");
    alertaError.classList.add("show");

    setTimeout(function () {
      alertaError.classList.remove("show");
      alertaError.classList.add("hide");
    }, 2000);
  } else {
    e.preventDefault();
    alertaExito.classList.remove("hide");
    alertaExito.classList.add("show");

    setTimeout(function () {
      alertaExito.classList.remove("show");
      alertaExito.classList.add("hide");
    }, 2000);
    
    /* VACIAR INPUTS */
    inputNombre.value = "";
    inputEmail.value = "";
    inputComents.value = "";
  }
}

/* EVENTOS DEL FORMULARIO */
formulario.addEventListener("submit", validar);


/* BOTON PARA IR HACIA LA PARTE SUPERIOR DE LA PÁGINA */
let btnTop = document.getElementById( "btnTop" );
let logo = document.getElementById( "logo" );

/* DETECTAR SCROLL EN UNA PAGINA WEB */
window.addEventListener( "scroll", function(){
  /* cuando de usa documentElement se hace referencia al documento padre HTML */
  let scroll = document.documentElement.scrollTop; /* tamaño del SCROLL completo */
  let fullSize = document.documentElement.offsetHeight; /* tamaño del altura */
  let sizeViewport = document.documentElement.clientHeight; /* tamaño del Viewport */

  if(scroll  > 100){
    /* classList permite agregar  o eliminar clases creadas a un elemento html */
    btnTop.classList.add( "show" );
  }
  else{
    btnTop.classList.remove( "show" );
  }

  /* MODIFICAR ELEMENTO CUANDO LLEGA AL FINAL DE LA PAGINA */
  if(fullSize == (scroll + sizeViewport)) {
    btnTop.classList.add("scrollFinal");
  }
  else{
    btnTop.classList.remove("scrollFinal");
  }

});

/* DETECTAR EVENTO CLIC EN EL BOTÓN PARA QUE LLEVE A LA PARTE SUPERIOR DE LA PÁGINA */
btnTop.addEventListener("click", function(){
  /* ScrollTo, nos permite ir directamente a una posición específica en la página web, sus valores son eje X y el eje Y*/
  window.scrollTo(0, 0);
});

/* DETECTAR EVENTO CLIC EN EL LOGO DE LA PAGINA PARA QUE LLEVE A LA PARTE SUPERIOR DE LA MISMA */
logo.addEventListener("click", function(){
  /* ScrollTo, nos permite ir directamente a una posición específica en la página web, sus valores son eje X y el eje Y*/
  window.scrollTo(0, 0);
});