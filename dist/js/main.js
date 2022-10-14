const body = document.querySelector('body');
//fix heigth on mobile
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// burger menu
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

// adding animation on scroll with IntersectionObserver

(function() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.target.classList.contains('custom-hidden-up')) {
				return entry.isIntersecting ?
					entry.target.classList.add('custom-show-up')
						: entry.target.classList.remove('custom-show-up');
			}

			if (entry.target.classList.contains('custom-hidden-left')) {
				return entry.isIntersecting ?
					entry.target.classList.add('custom-show-left')
						: entry.target.classList.remove('custom-show-left');
			}

			if (entry.target.classList.contains('custom-hidden-right')) {
				return entry.isIntersecting ?
					entry.target.classList.add('custom-show-right')
						: entry.target.classList.remove('custom-show-right');
			}
		});
	});

	const hiddenUpElements = document.querySelectorAll('.custom-hidden-up');
	const hiddenLeftElements = document.querySelectorAll('.custom-hidden-left');
	const hiddenRightElements = document.querySelectorAll('.custom-hidden-right');

	hiddenUpElements.forEach(elem => observer.observe(elem));
	hiddenLeftElements.forEach((elem) => observer.observe(elem));
	hiddenRightElements.forEach(elem => observer.observe(elem));
})();