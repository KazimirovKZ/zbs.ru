const btnMenu = document.querySelector('.menu_btn_mobli');
const menu = document.querySelector('.menu_mobile_wrap');
const closeBtn = document.querySelector('.menu_mobile_close_btn');

const toggleMenu = function () {

	btnMenu.classList.toggle('active');
	menu.classList.toggle('active');
}

btnMenu.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMenu();
});

closeBtn.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMenu();
});

document.addEventListener('click', function (e) {
	const target = e.target;
	const its_menu = target == menu || menu.contains(target);
	const its_btnMenu = target == btnMenu;
	const menu_is_active = menu.classList.contains('active');

	if (!its_menu && !its_btnMenu && menu_is_active) {
		toggleMenu();
	}
});










const btnPolici = document.querySelector('.politica');
const message = document.querySelector('.message-wrapper');
const Message = document.querySelector('.message');

const toggleMessage = function () {
	message.classList.toggle('active');
}

btnPolici.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMessage();
});

Message.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMessage();
});


document.addEventListener('click', function (e) {
	const target = e.target;
	const its_Menu = target == message || message.contains(target);
	const menu_is_Active = message.classList.contains('active');

	if (!its_Menu && menu_is_Active) {
		toggleMessage();
	}
});