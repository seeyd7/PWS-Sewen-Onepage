const go2Top = document.querySelector("#go2Top");
const menu = document.querySelector("#menu");
const navMenu = document.querySelector(".navbar-menu");
const menuToggler = document.querySelector(".menu-toggler");
const navbar = document.querySelector("nav");

	// Adding animations values

const animationClass = [
	'.reviews-content',
	'.main-slogan-content',
	'.about-container-content',
	'.about-image',
	'.services',
];

const animationName = [
	'bounceIn',
	'bounceInDown',
	'fadeInRight',
	'fadeInLeft',
	'bounceIn',
];

const triggerName = [
	'.reviews-main-container',
	'#main',
	'#main',
	'#main',
	'#home',
];

	// End of values

const animationTrigger = [];

for (let x = 0; x < triggerName.length; x++) {
	for (let y = x; y < triggerName.length; y++) {
		const x = document.querySelector(triggerName[y]);
		animationTrigger.push(x);
	}
}

const blockArray = [];
	for (let i = 0; i < animationClass.length; i++) {
		let i = 0;
		blockArray.push(i);
	}

	// AnimateCSS function
const animateCSS = (element, animation, prefix = 'animate__') =>
	new Promise((resolve, reject) => {
		const animationName = `${prefix}${animation}`;
		const node = document.querySelector(element);

		node.classList.add(`${prefix}animated`, animationName);

		function handleAnimationEnd(event) {
			event.stopPropagation();
			node.classList.remove(`${prefix}animated`, animationName);
			resolve('Animation ended');
		}

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
	// End of function

addEventListener("scroll", () => {
	let scroll = this.scrollY;
	if(scroll > menu.clientHeight) {
    go2Top.style.opacity = 1;
    go2Top.style.lineHeight = "40px";
		go2Top.style.cursor = "pointer";
		console.log(go2Top.style.cursor);
	navbar.style.height = "8vh";
	navbar.style.backgroundColor = "rgba(0, 0, 0, 0.75)"
	} else {
		go2Top.style.opacity = 0;
		go2Top.style.cursor = "default";
		navbar.style.height = "10vh";
		navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
		console.log(go2Top.style.cursor);
	}
	// AnimateCSS animation trigger
	for (let i = 0; i < animationClass.length; i++) {
		if (blockArray[i] == 0) {
			if (scroll > animationTrigger[i].offsetTop) {
				animateCSS(animationClass[i] , animationName[i]);
				blockArray[i] += 1;
			}
		}
	}
})


go2Top.addEventListener("click", () => {
	if(go2Top.style.opacity != 0) window.scrollTo(0, 0);
})

menuToggler.addEventListener("click", () => {
	if(menuToggler.classList.contains("active")) {
		menuToggler.classList.remove("active");
		navMenu.classList.remove("active");
	} else {
		menuToggler.classList.add("active");
		navMenu.classList.add("active");
	}
});

function showIt() {
	document.querySelector(".header-contact-button").style.opacity = "1";
}
