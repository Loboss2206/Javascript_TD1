'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function defineHeading1() {
	document.title = document.getElementById("title").textContent;
}

function defineHeading2() {
	document.title = document.querySelector("h2").textContent;
}

function defineHeading3() {
	var h2Count = document.querySelectorAll("h2").length;
	if (h2Count == 0) {
		document.title = "Brunet Logan";
	}
	else {
		document.title = document.querySelectorAll("h2")[h2Count - 1].textContent;
	}
}

function defineHeading4() {
	var elements = document.querySelectorAll(".firstOrLast");
	var elementsCount = elements.length;
	if (elementsCount == 0) {
		document.title = "Brunet Logan";
	}
	else if (elementsCount % 2 == 0) {
		document.title = elements[0].textContent;
	}
	else {
		document.title = elements[elementsCount - 1].textContent;
	}
}

function swapInnerHTML() {
	var elementsP = document.querySelectorAll("p");
	var temp = elementsP[0].textContent;
	elementsP[0].innerHTML = elementsP[1].textContent;
	elementsP[1].innerHTML = temp;
}

function dateAlter() {
	var date = new Date();
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var formattedDate = date.toLocaleDateString('fr-FR', options);

	var elements = document.querySelectorAll("div");
	var elementsCount = elements.length;
	var div = elements[elementsCount - 1];

	var metaTags = document.getElementsByTagName("meta");
	var metaTagsCount = metaTags.length;
	for (var i = 0; i < metaTagsCount; i++) {
		if (metaTags[i].getAttribute("name") == "author") {
			var author = metaTags[i].getAttribute("content");
			break;
		}
	}

	div.innerHTML = "Dernière modification : le " + formattedDate + " par " + author;
}

function getNbDays() {
	var today = new Date();
	var targetDate = new Date(2023, 6, 19);
	var timeDiff = targetDate.getTime() - today.getTime();
	var nbDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

	return nbDays;
}

function changeTextDays() {
	var nbDays = getNbDays();
	if (nbDays == 1) {
		var text = "Il reste 1 jour avant le 19 juillet 2023";
	}
	else {
		var text = "Il reste " + nbDays + " jours avant le 19 juillet 2023";
	}

	document.getElementById("daysLeft").innerHTML = text;
}

function updateClock1() {
	const intervalID = window.setInterval(changeHour, 1000);
}

function updateClock2() {
	const intervalID = window.setTimeout(changeHour, 1000);
}

function updateGraphicClock() {
	const intervalID = window.setInterval(changeGraphicHour, 1000);
}

function changeHour() {
	var date = new Date();
	document.getElementById("clock").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function changeGraphicHour() {
	var block = document.getElementById("graphic-clock");

	var date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const hoursLength = hours.toString().length;
	const minutesLength = minutes.toString().length;

	var h1;
	var h2;
	var m1;
	var m2;

	if (hoursLength == 1) {
		h1 = 0;
		h2 = hours;
	}
	else {
		h1 = hours.toString().substring(0, 1);
		h2 = hours.toString().substring(1, 2);
	}

	if (minutesLength == 1) {
		m1 = 0;
		m2 = minutes;
	}
	else {
		m1 = minutes.toString().substring(0, 1);
		m2 = minutes.toString().substring(1, 2);
	}

	block.innerHTML = "<img src=\"assets/images/" + h1 + ".gif\"></img>" +
		"<img src=\"assets/images/" + h2 + ".gif\"></img>" +
		"<img src=\"assets/images/minus.gif\"></img>" +
		"<img src=\"assets/images/" + m1 + ".gif\"></img>" +
		"<img src=\"assets/images/" + m2 + ".gif\"></img>";
}

function onLoad() {
	console.log('In onLoad() function…');
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	updateClock1();
	updateGraphicClock();
	setUpMenu();
	setUpInput();
}

function setUpInput() {
	var inputText = document.getElementById("inputText");

	inputText.addEventListener("input", function () {
		var textValue = inputText.value;

		if (textValue === "") {
			inputText.classList.remove("red");
			inputText.classList.remove("green");
			inputText.classList.add("white");
		} else if (isNaN(textValue)) {
			inputText.classList.remove("green");
			inputText.classList.add("red");
		} else {
			inputText.classList.remove("red");
			inputText.classList.add("green");
		}
	});
}

function setUpMenu() {
	const menuElement = document.querySelectorAll('.menu-element');

	menuElement.forEach(element => {
		const menuTitle = element.children.item(0);
		const menuList = element.children.item(1);

		const title = menuTitle.children.item(0);
		var iconPlus;

		if (menuTitle.children.length == 1) {
			menuList.style.display = "none";
			iconPlus = document.createElement('i');
			iconPlus.classList.add('fas', 'fa-plus');
			menuTitle.insertBefore(iconPlus, title);

			menuTitle.addEventListener('click', () => {
				if (menuList.style.display === 'none') {
					menuList.style.display = 'block';
					menuTitle.classList.add('clicked');
					iconPlus.classList.remove('fa-plus');
					iconPlus.classList.add('fa-minus');
				} else {
					menuList.style.display = 'none';
					menuTitle.classList.remove('clicked');
					iconPlus.classList.remove('fa-minus');
					iconPlus.classList.add('fa-plus');
				}
			});
		}
		else {
			iconPlus = menuTitle.children.item(0);
		}
	})
}

function search() {
	var searchText = document.getElementById('search-text').value;
	clearSelection();

	function clearSelection() {
		var selected = document.querySelectorAll('.select');
		for (var i = 0; i < selected.length; i++) {
			selected[i].classList.remove('select');
		}
	}

	if (!searchText == "") {

		function traverse(node) {
			var child, next;

			switch (node.nodeType) {
				case 1:
					if (node.tagName.toLowerCase() != 'script') {
						for (child = node.firstChild; child; child = next) {
							next = child.nextSibling;
							traverse(child);
						}
					}
					break;

				case 3:
					var text = node.nodeValue;
					var re = new RegExp(searchText, 'gi');
					if (re.test(text)) {
						var parent = node.parentNode;
						var html = parent.innerHTML;
						html = html.replace(re, '<span class="select">$&</span>');
						parent.innerHTML = html;
					}
					break;
			}
		}

		traverse(document.body);
	}
	setUpInput();
	setUpMenu();
}

document.getElementById("daysLeft").addEventListener("click", changeTextDays);