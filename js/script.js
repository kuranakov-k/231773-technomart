var showFeedback = document.querySelector(".btn-feedback");
var feedbackPopup = document.querySelector(".modal-write-us");
var closeFeedback = document.querySelector(".feedback-close");
var nameFeedback = feedbackPopup.querySelector("[name=name]");
var mailFeedback = feedbackPopup.querySelector("[name=mail]");
var letterFeedback = feedbackPopup.querySelector("[name=letter]");
var storageName = localStorage.getItem("name");
var storageMail = localStorage.getItem("mail");

var showCart = document.querySelectorAll(".btn-buy");
var closeCart = document.querySelector(".btn-continue");
var cartPopup = document.querySelector(".cart");
var exitCart = document.querySelector(".cart-close")

var services = document.querySelector(".services-container");
var deliveryButton = document.querySelector(".delivery");
var guaranteeButton = document.querySelector(".guarantee");
var creditButton = document.querySelector(".credit");
var servicesInfo = document.querySelector(".services-container");

var showMap = document.querySelector(".company-map");
var mapPopup = document.querySelector(".modal-map");
var closeMap = document.querySelector(".map-close");
var closeByShadow = document.querySelector(".modal-overlay");

var modalForm = feedbackPopup.querySelector("form");

var overlay = document.querySelector(".modal-overlay");

var i;
for (i = 0; i < showCart.length; i++) {
	showCart[i].addEventListener("click", function(event) {
		event.preventDefault();
		cartPopup.classList.add("modal-content-show");
	});
}
exitCart.addEventListener("click", function(event) {
	event.preventDefault();
	cartPopup.classList.remove("modal-content-show");
})
closeCart.addEventListener("click", function(event) {
	event.preventDefault();
	cartPopup.classList.remove("modal-content-show");
})
showFeedback.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackPopup.classList.add("modal-content-show");
	overlay.classList.add("modal-content-show");
	nameFeedback.focus();
	if (storageName) {
		nameFeedback.value = storageName;
		mailFeedback.focus();
		if (storageMail) {
			letterFeedback.focus();
		}
	}
	else {
		console.log("нет e-mail");
	}
	if (storageMail) {
		mailFeedback.value =storageMail;
	}
	else {
		console.log("нет e-mail");
	}
});
closeFeedback.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackPopup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-content-show");
});
showMap.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
	overlay.classList.add("modal-content-show");
});
closeMap.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-content-show");
});
closeByShadow.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
	feedbackPopup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-content-show");
});

modalForm.addEventListener("submit", function(event) {
	event.preventDefault();
	console.log("qwe");
});
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
			if (feedbackPopup.classList.contains("modal-content-show") || mapPopup.classList.contains("modal-content-show")) {
				feedbackPopup.classList.remove("modal-content-show");
				mapPopup.classList.remove("modal-content-show");
				overlay.classList.remove("modal-content-show");
			}
			else {
				console.log("pop-up windows is not poped up");
			}
	}
});
guaranteeButton.addEventListener("click", function() {
	event.preventDefault();
	services.classList.remove("services-delivery");
	services.classList.remove("services-credit");
	services.classList.add("services-guarantee");
	guaranteeButton.classList.add("services-active");
	deliveryButton.classList.remove("services-active");
	creditButton.classList.remove("services-active");
	guaranteeButton.innerHTML = "<span>Гарантия</span>";
	deliveryButton.innerHTML = "<a href='#'>Доставка</a>";
	creditButton.innerHTML = "<a href='#'>Кредит</a>";
	servicesInfo.innerHTML = "<h2 class='services-col-title'>Гарантия</h2><p class='services-col-info'>Если купленный у нас товар поломается или заискрит, а так же в случае пожара, спровоцированного его возгаранием, вы всегда можете быть уверенными в нашей гарантии. Мы обменяем сгоревший товар на новый.<br>Дом уж восстановите как нибудь сами.</p>";
});

deliveryButton.addEventListener("click", function() {
	event.preventDefault();
	services.classList.remove("services-guarantee");
	services.classList.remove("services-credit");
	services.classList.add("services-delivery");
	guaranteeButton.classList.add("services-active");
	guaranteeButton.classList.remove("services-active");
	creditButton.classList.remove("services-active");
	deliveryButton.innerHTML = "<span>Доставка</span>";
	guaranteeButton.innerHTML = "<a href='#'>Гарантия</a>";
	creditButton.innerHTML = "<a href='#'>Кредит</a>";
	servicesInfo.innerHTML = "<h2 class='services-col-title'>Доставка</h2><p class='services-col-info'>Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно!<br>Ведь мы неплохо заработаем, поднимая его на ваш этаж!</p>";
});

creditButton.addEventListener("click", function() {
	event.preventDefault();
	services.classList.remove("services-guarantee");
	services.classList.remove("services-delivery");
	services.classList.add("services-credit");
	guaranteeButton.classList.add("services-active");
	deliveryButton.classList.remove("services-active");
	guaranteeButton.classList.remove("services-active");
	creditButton.innerHTML = "<span>Кредит</span>";
	guaranteeButton.innerHTML = "<a href='#'>Гарантия</a>";
	deliveryButton.innerHTML = "<a href='#'>Доставка</a>";
	servicesInfo.innerHTML = "<h2 class='services-col-title'>Кредит</h2><p class='services-col-info'>Залезть в долговую яму стало проще! <br>Кредитные консультанты придут вам на помощь.</p><br><a class='btn btn-credit' href='#'>Оформить заявку</a>";
});
