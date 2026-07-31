const imagenes = [
    "img/Insertar video 1.jpg",
    "img/Insertar video 2.png",
    "img/Insertar video 3.png"
];

let actual = 0;

const imagen = document.getElementById("imagenCarrusel");
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");

// Carrusel de imágenes
if (imagen && siguiente && anterior) {

    function cambiarImagen() {
        imagen.src = imagenes[actual];
    }

    siguiente.addEventListener("click", () => {
        actual = (actual + 1) % imagenes.length;
        cambiarImagen();
    });

    anterior.addEventListener("click", () => {
        actual = (actual - 1 + imagenes.length) % imagenes.length;
        cambiarImagen();
    });
}

// Tarjetas del portafolio
const tarjetas = document.querySelectorAll(".tarjeta-hito");

let abierta = null;

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        if (abierta && abierta !== tarjeta) {
            abierta.classList.remove("activa");
        }

        tarjeta.classList.toggle("activa");

        abierta = tarjeta.classList.contains("activa")
            ? tarjeta
            : null;

    });

});