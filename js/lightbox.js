

const cargarimagen = document.querySelector(".agregar-imagen");
const imagenlight = document.querySelector('.imagen-light');
const imagenes = document.querySelectorAll(".img-galeria");
const close = document.querySelector('.close');

console.log(cargarimagen);
console.log(imagenlight);
console.log(imagenes);

imagenes.forEach(imagen=>{
	imagen.addEventListener('click', ()=>{
		cargarimagen.setAttribute('src',imagen.getAttribute('src'));
		console.log(cargarimagen.getAttribute('src'));
		imagenlight.classList.toggle('show');
		cargarimagen.classList.toggle('showimage');
	})

})

close.addEventListener('click', ()=>{
	imagenlight.classList.toggle('show');
	cargarimagen.classList.toggle('showimage');
})


	
