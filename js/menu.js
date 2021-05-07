const menuicon = document.querySelector(".menu-icon");
const menu = document.querySelector('.menu-nav');

menuicon.addEventListener('click', ()=>{
	menu.classList.toggle('spread');
})

window.addEventListener('click', e=>{
	if(menu.classList.contains('spread') && e.target != menu && e.target != menuicon){
		menu.classList.toggle('spread');
	}
})