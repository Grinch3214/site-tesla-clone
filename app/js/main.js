const body = document.querySelector('body');

(function() {
	const menuBtn = document.querySelector('.header-menu');
	const overlay = document.querySelector('.overlay');
	const rightMenu = document.querySelector('.right-menu');
	const closeBtn = document.querySelector('.right-menu__btn');

	menuBtn.addEventListener('click', (event) => {
		addingClasses(body, 'locked');
		addingClasses(overlay);
		addingClasses(rightMenu);
	});

	closeBtn.addEventListener('click', (event) => {
		removeClasses(body, 'locked');
		removeClasses(overlay);
		removeClasses(rightMenu);
	});

	function addingClasses(element, nameClass = 'active') {
		element.classList.add(nameClass);
	}

	function removeClasses(element, nameClass = 'active') {
		element.classList.remove(nameClass);
	} 
})();
