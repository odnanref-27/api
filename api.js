const URL = "https://dog.ceo/api/breeds/image/random/3"
const boton = document.getElementById("boton");
const imagen = document.getElementById("image");
const container = document.getElementById("contenedor");



async function cargarImagen() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const imageUrl = data.message;

        imagen.src = imageUrl[0];
    } catch(error){
        console.log("error");
    }
};
boton.addEventListener('click', cargarImagen);