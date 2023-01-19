// Sticky nav background change

window.onscroll = () => {
	scrollNavbar();
};

scrollNavbar = () => {
	// Target elements
	const navBar = document.getElementById("navBar");
	const links = document.querySelectorAll(".nav-link");

	if (document.documentElement.scrollTop > 25) {
		navBar.classList.add("fixed-header");

		// Change the color of links on scroll
		for (let i = 0; i < links.length; i++) {
			const element = links[i];
			element.classList.add("text-accent");
		}
	} else {
		navBar.classList.remove("fixed-header");

		// Change the color of links back to default
		for (let i = 0; i < links.length; i++) {
			const element = links[i];
			element.classList.remove("text-accent");
		}
	}
};

// // Add active class for nav
// document.querySelector(document).ready(function () {
// 	document.querySelector("a[href*=#]").bind("click", function (e) {
// 		e.preventDefault(); // prevent hard jump, the default behavior

// 		var target = document.querySelector(this).attr("href"); // Set the target as variable

// 		// perform animated scrolling by getting top-position of target-element and set it as scroll target
// 		document
// 			.querySelector("html, body")
// 			.stop()
// 			.animate(
// 				{
// 					scrollTop: document.querySelector(target).offset().top,
// 				},
// 				600,
// 				function () {
// 					location.hash = target; //attach the hash (#jumptarget) to the pageurl
// 				}
// 			);

// 		return false;
// 	});
// });

// document
// 	.querySelector(window)
// 	.scroll(function () {
// 		var scrollDistance = document.querySelector(window).scrollTop;

// 		// Show/hide menu on scroll
// 		//if (scrollDistance >= 850) {
// 		//		document.querySelector('nav').fadeIn("fast");
// 		//} else {
// 		//		document.querySelector('nav').fadeOut("fast");
// 		//}

// 		// Assign active class to nav links while scolling
// 		document.querySelector(".page-section").each(function (i) {
// 			if (document.querySelector(this).position().top <= scrollDistance) {
// 				document.querySelector(".nav-menu a.active").classList.remove("active");
// 				document.querySelector(".nav-menu a").eq(i).classList.add("active");
// 			}
// 		});
// 	})
// 	.scroll();

// Mobile Menu
function toggleMenu() {
	let hamMenu = document.querySelector("#navBar");
	let navMenu = document.querySelector("#navMenu");

	hamMenu.classList.toggle("menu-open");
	navMenu.classList.toggle("open");
}

//  Filter for project items
filterSelection("all");
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("projects_item");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
	}
}

function AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

function RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-nav");
var btns = btnContainer.getElementsByClassName("filter-selector");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

function validateForm() {
	let name = document.forms.userMsg.userName.value;
	let email = document.forms.userMsg.userEmail.value;
	let msg = document.forms.userMsg.message.value;
	let displayError = document.querySelector(".error-message");

	var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
	var regName = /\d+$/g; // Javascript reGex for Name validation									 // Javascript reGex for Phone Number validation.

	if (name == "" || regName.test(name)) {
		displayError.innerHTML = "Please enter a valid name";
		name.focus();
		return false;
	}

	if (email == "" || !regEmail.test(email)) {
		displayError.innerHTML = "Please enter a valid e-mail address.";
		email.focus();
		return false;
	}

	if (msg == "") {
		displayError.innerHTML = "Please enter a message.";
		msg.focus();
		return false;
	}

	return true;
}

$("#submit-form").submit((e) => {
	e.preventDefault();
	validateForm();
	if (validateForm) {
		$.ajax({
			url: "https://script.google.com/macros/s/AKfycbynhyjuUzdqxTIAdT7V0rcGHnAm-N6pDiJURBaZ660VwxQB9r7KKCqpDPr487mSeDffGA/exec",
			data: $("#submit-form").serialize(),
			method: "post",
			success: function (response) {
				alert("Form submitted successfully");
				window.location.reload();
				//window.location.href="https://google.com"
			},
			error: function (err) {
				alert("Something Error");
			},
		});
	}
});
