
/*===========for IE11=================*/
(function (ELEMENT) {

	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

	ELEMENT.closest = ELEMENT.closest || function closest(selector) {

		if (!this) return null;

		if (this.matches(selector)) return this;

		if (!this.parentElement) { return null }

		else return this.parentElement.closest(selector)

	};

}(Element.prototype));
/*===========for IE11=================*/

/*===========menu burger=================*/
$(document).ready(function () {
	$('.menu-burger').click(function (event) {
		$('.menu-burger,.header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
/*===========menu burger=================*/

/*===========виводит под-меню=================*/
let menu_icon1 = document.querySelector('.link-1 span .fas');
menu_icon1.addEventListener("click", function (e) {
	menu_icon1.classList.toggle('_active1');
	let sub_menu = document.querySelector('.header__sab-menu');
	sub_menu.classList.toggle('_active1');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.link-1 span .fas')) {
		if (!e.target.closest('.header__sab-menu')) {
			menu_icon1.classList.remove('_active1');
			let sub_menu = document.querySelector('.header__sab-menu');
			sub_menu.classList.remove('_active1');
		}
	}
});

let menu_icon2 = document.querySelector('.link-2 span .fas');
menu_icon2.addEventListener("click", function (e) {
	menu_icon2.classList.toggle('_active2');
	let sub_menu = document.querySelector('.header__sab-menu');
	sub_menu.classList.toggle('_active2');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.link-2 span .fas')) {
		if (!e.target.closest('.header__sab-menu')) {
			menu_icon2.classList.remove('_active2');
			let sub_menu = document.querySelector('.header__sab-menu');
			sub_menu.classList.remove('_active2');
		}
	}
});

let menu_icon3 = document.querySelector('.link-3 span .fas');
menu_icon3.addEventListener("click", function (e) {
	menu_icon3.classList.toggle('_active3');
	let sub_menu = document.querySelector('.header__sab-menu');
	sub_menu.classList.toggle('_active3');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.link-3 span .fas')) {
		if (!e.target.closest('.header__sab-menu')) {
			menu_icon3.classList.remove('_active3');
			let sub_menu = document.querySelector('.header__sab-menu');
			sub_menu.classList.remove('_active3');
		}
	}
});

let menu_icon4 = document.querySelector('.link-4 span .fas');
menu_icon4.addEventListener("click", function (e) {
	menu_icon4.classList.toggle('_active4');
	let sub_menu = document.querySelector('.header__sab-menu');
	sub_menu.classList.toggle('_active4');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.link-4 span .fas')) {
		if (!e.target.closest('.header__sab-menu')) {
			menu_icon4.classList.remove('_active4');
			let sub_menu = document.querySelector('.header__sab-menu');
			sub_menu.classList.remove('_active4');
		}
	}
});

let menu_icon5 = document.querySelector('.link-5 span .fas');
menu_icon5.addEventListener("click", function (e) {
	menu_icon5.classList.toggle('_active5');
	let sub_menu = document.querySelector('.header__sab-menu-end');
	sub_menu.classList.toggle('_active5');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.link-5 span .fas')) {
		if (!e.target.closest('.header__sab-menu-end')) {
			menu_icon5.classList.remove('_active5');
			let sub_menu = document.querySelector('.header__sab-menu-end');
			sub_menu.classList.remove('_active5');
		}
	}
});
/*===========виводит под-под-меню=================*/
let sab_menu1 = document.querySelector('.title-sab-menu1');
sab_menu1.addEventListener("click", function (e) {
	let sub_menu = document.querySelector('.sab-menu__sab1');
	sub_menu.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.title-sab-menu1')) {
		if (!e.target.closest('.sab-menu__sab1')) {
			sab_menu1.classList.remove('_active');
			let sub_menu = document.querySelector('.sab-menu__sab1');
			sub_menu.classList.remove('_active');
		}
	}
});

let sab_menu2 = document.querySelector('.title-sab-menu2');
sab_menu2.addEventListener("click", function (e) {
	let sub_menu = document.querySelector('.sab-menu__sab2');
	sub_menu.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.title-sab-menu2')) {
		if (!e.target.closest('.sab-menu__sab2')) {
			sab_menu2.classList.remove('_active');
			let sub_menu = document.querySelector('.sab-menu__sab2');
			sub_menu.classList.remove('_active');
		}
	}
});

let sab_menu3 = document.querySelector('.title-sab-menu3');
sab_menu3.addEventListener("click", function (e) {
	let sub_menu = document.querySelector('.sab-menu__sab3');
	sub_menu.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.title-sab-menu3')) {
		if (!e.target.closest('.sab-menu__sab3')) {
			sab_menu3.classList.remove('_active-end');
			let sub_menu = document.querySelector('.sab-menu__sab3');
			sub_menu.classList.remove('_active');
		}
	}
});

let sab_menu4 = document.querySelector('.title-sab-menu4');
sab_menu4.addEventListener("click", function (e) {
	let sub_menu = document.querySelector('.sab-menu__sab4');
	sub_menu.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.title-sab-menu4')) {
		if (!e.target.closest('.sab-menu__sab4')) {
			sab_menu4.classList.remove('_active');
			let sub_menu = document.querySelector('.sab-menu__sab4');
			sub_menu.classList.remove('_active');
		}
	}
});
/*===============Фиксируем меню при скролле================*/
var h_hght = 45; // высота шапки
var h_mrg = 0; // отступ когда шапка уже не видна

$(function () {
	var elem = $('#top_nav');
	var top = $(this).scrollTop();

	if (top > h_hght) {
		elem.css('top', h_mrg);
	}
	$(window).scroll(function () {
		top = $(this).scrollTop();
		if (top + h_mrg < h_hght) {
			elem.css('top', (h_hght - top));
		} else {
			elem.css('top', h_mrg);
		}
	});
});
















let menuFooter1 = document.querySelector('#angel-down1');
menuFooter1.addEventListener("click", function (e) {
	menuFooter1.classList.toggle('_active');
	let sub_menuFooter = document.querySelector('.footer__list1');
	sub_menuFooter.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('#angel-down1')) {
		if (!e.target.closest('.footer__list1')) {
			menuFooter1.classList.remove('_active');
			let sub_menuFooter = document.querySelector('.footer__list1');
			sub_menuFooter.classList.remove('_active');
		}
	}
});

let menuFooter2 = document.querySelector('#angel-down2');
menuFooter2.addEventListener("click", function (e) {
	menuFooter2.classList.toggle('_active');
	let sub_menuFooter = document.querySelector('.footer__list2');
	sub_menuFooter.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('#angel-down2')) {
		if (!e.target.closest('.footer__list2')) {
			menuFooter2.classList.remove('_active');
			let sub_menuFooter = document.querySelector('.footer__list2');
			sub_menuFooter.classList.remove('_active');
		}
	}
});

let menuFooter3 = document.querySelector('#angel-down3');
menuFooter3.addEventListener("click", function (e) {
	menuFooter3.classList.toggle('_active');
	let sub_menuFooter = document.querySelector('.footer__list3');
	sub_menuFooter.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('#angel-down3')) {
		if (!e.target.closest('.footer__list3')) {
			menuFooter3.classList.remove('_active');
			let sub_menuFooter = document.querySelector('.footer__list3');
			sub_menuFooter.classList.remove('_active');
		}
	}
});

let menuFooter4 = document.querySelector('#angel-down4');
menuFooter4.addEventListener("click", function (e) {
	menuFooter4.classList.toggle('_active');
	let sub_menuFooter = document.querySelector('.footer__list4');
	sub_menuFooter.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('#angel-down4')) {
		if (!e.target.closest('.footer__list4')) {
			menuFooter4.classList.remove('_active');
			let sub_menuFooter = document.querySelector('.footer__list4');
			sub_menuFooter.classList.remove('_active');
		}
	}
});

let menuFooter5 = document.querySelector('#angel-down5');
menuFooter5.addEventListener("click", function (e) {
	menuFooter5.classList.toggle('_active');
	let sub_menuFooter = document.querySelector('.footer__list5');
	sub_menuFooter.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('#angel-down5')) {
		if (!e.target.closest('.footer__list5')) {
			menuFooter5.classList.remove('_active');
			let sub_menuFooter = document.querySelector('.footer__list5');
			sub_menuFooter.classList.remove('_active');
		}
	}
});
let kontentInfo = document.querySelector('.fa-info-circle');
kontentInfo.addEventListener("click", function (e) {
	kontentInfo.classList.toggle('_active');
	let subKontentInfo = document.querySelector('.kontent__info');
	subKontentInfo.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.fa-info-circle')) {
		if (!e.target.closest('.kontent__info')) {
			kontentInfo.classList.remove('_active');
			let subKontentInfo = document.querySelector('.kontent__info');
			subKontentInfo.classList.remove('_active');
		}
	}
});
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();
//$(document).ready(function () {
//	$('.slider').slick({//==Обращаемся к слайдеру в HTML
//		arrows: true,//Включени стрелки
//		dots: true,//Включает точки
//		adaptiveHeight: true,//Включает разную висоту слайдам
//		slidesToShow: 3,//Количество слайдов
//		slidesToScroll: 1,//Количество слайдов пролистуемо за одно нажатие
//		speed: 200,//Скорость пролистования слайдов
//		easing: 'linear',// Анимация появления слайдов
//		infinite: true,// Разрешает бесконечную прокрутку слайдов
//		initialSlide: 0,//Указует с какого слайда начинать просмотр
//		autoplay: false,//Автоматическое проигривание слайдов
//		autoplaySpeed: 3000,//Время проигривания слайдов
//		pauseOnFocus: true,//Остановка слайдера при фокусе на слайд
//		pauseOnHover: true,//Остановка слайдера при наведении на слайд
//		pauseOnDotsHover: true,//Остановка слайдера при наведении на точку слайда
//		draggable: true,//Отключает перемотку слайдов мишкой
//		swipe: true,//Отключает перемотку слайдов на сенсорах
//		touchThreshold: 5,//Длинна свайпа для перемотки слайдов
//		touchMove: true,//false Включает или отключает возможности свайпа
//		waitForAnimate: true,//false Виключает или отключает возможность по клику листать слайди
//		centerMode: false,//true Виравнивает слайди по центру
//		variableWidth: false,// true При включении сам контент определяет ширину
//		rows: 1,//Количество етажей слайдера
//		slidesPerRow: 1,//Количество слайдов в ряду
//		//asNavFor:".Класс слайдера",//Связивает слайдеры
//		//fade:true,//Оставляет 1 слайд и придает ему плавную смену на другой
//		responsive: [
//			{
//				breakpoint: 768,
//				settings: {
//					//Указиваем параметри при ширине меньшей указаний
//				}
//			}, {
//				breakpoint: 480,
//				settings: {
//					//Указиваем параметри при ширине меньшей указаний
//				}
//			}
//		],
//		mobileFirst: false,//Меняет значение брекпоинтов с min-width на max-width
//		//appendArrows:$('Класс блокка'),//Перемещает стрелки в заданий блок
//		//appendDots:$('Класс блокка'),//Перемещает точки в заданий блок
//	});
//	//======Собития=====
//	/*$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//		console.log(nextSlide);//Виводит номер следующего слайда в консоле
//	})
//	//======Методи=====
//	$('.slider').slick('setPosition');//Презагрузка слайдера при проблемах
//	$('.slider').slick('goTo',0);//Пролистывает до определенного слайда*/
//});