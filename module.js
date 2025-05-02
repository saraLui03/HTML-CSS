import mangoImg from "url:./src/Img/Escritorio/pastelito.webp"

import LogoImg from "url:./src/Img/Escritorio/logo_ArteDulce.webp"
import FresaImg from "url:./src/Img/Escritorio/choclolateBlancoConFresas.webp"


const images = [
    
    mangoImg,
    LogoImg, 
    FresaImg];
    
const gridCells = document.querySelectorAll(".element img");

function changeRandomImage() {
    const randomCell = Math.floor(Math.random() * gridCells.length);
    let randomImage = images[Math.floor(Math.random() * images.length)];
    while(randomImage == gridCells[randomCell].src) {
        randomImage = images[Math.floor(Math.random() * images.length)];
    }

    // Agrega un efecto de fade-out antes de cambiar la imagen
    gridCells[randomCell].style.opacity = "0";

    setTimeout(() => {
        gridCells[randomCell].src = randomImage;
        gridCells[randomCell].style.opacity = "";
    }, 500); // Tiempo de transición
}

// Alternar imágenes cada 2 segundos
setInterval(changeRandomImage, 2000);
export{changeRandomImage}

