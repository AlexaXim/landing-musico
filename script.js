const videos = [
    "x7nk-2TMx7c",
    "0MhrxUJjMW0",
    "aZVFu2hQAWY"
];

let actual = 0;

const iframe = document.getElementById("youtubeVideo");
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");

function cambiarVideo() {
    iframe.classList.add("oculto");

    setTimeout(() => {
        iframe.src = "https://www.youtube.com/embed/" + videos[actual];

        iframe.onload = () => {
            iframe.classList.remove("oculto");
        };
    }, 250);
}

siguiente.addEventListener("click", () => {
    console.log("Click siguiente");
    actual = (actual + 1) % videos.length;
    cambiarVideo();
});

anterior.addEventListener("click", () => {
    console.log("Click anterior");
    actual = (actual - 1 + videos.length) % videos.length;
    cambiarVideo();
});
const tarjetas = document.querySelectorAll(".tarjeta-hito");

let abierta = null;

tarjetas.forEach(tarjeta=>{

    tarjeta.addEventListener("click",()=>{

        if(abierta && abierta!==tarjeta){
            abierta.classList.remove("activa");
        }

        tarjeta.classList.toggle("activa");

        abierta = tarjeta.classList.contains("activa")
            ? tarjeta
            : null;

    });

});