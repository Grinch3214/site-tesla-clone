const body = document.querySelector('body');
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

(function() {
	const menuBtn = document.querySelector('.header-menu');
	const overlay = document.querySelector('.overlay');
	const rightMenu = document.querySelector('.right-menu');
	const closeBtn = document.querySelector('.right-menu__btn');

	menuBtn.addEventListener('click', handlerAddClasses);
	closeBtn.addEventListener('click', handlerRemoveClasses);
	overlay.addEventListener('click', handlerRemoveClasses);

	function handlerAddClasses() {
		addingClasses(body, 'locked');
		addingClasses(overlay);
		addingClasses(rightMenu);
	}

	function handlerRemoveClasses() {
		removeClasses(body, 'locked');
		removeClasses(overlay);
		removeClasses(rightMenu);
	}

	function addingClasses(element, nameClass = 'active') {
		element.classList.add(nameClass);
	}

	function removeClasses(element, nameClass = 'active') {
		element.classList.remove(nameClass);
	} 
})();
