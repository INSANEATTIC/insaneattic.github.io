
/* ------------------------- DESKTOP VERSION ------------------------- */

window.onload = function () {
	document.body.classList.add("loaded-hiding");
	window.setTimeout(function () {
	document.body.classList.add("loaded");
	document.body.classList.remove("loaded-hiding");
	}, 500);
	}

var content = document.getElementById("content");
content.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/cover.jpg) center no-repeat fixed #000000";
content.style.backgroundSize = "cover";
content.style.transition = "0s";

window.onscroll = function (event) {

	var scroll = window.pageYOffset;

	if (scroll <= 20) {
		content.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/cover.jpg) center no-repeat fixed #000000";
		content.style.backgroundSize = "cover";
		content.style.transition = "0.5s ease";
		document.getElementById("logo").style.visibility = "visible";
		document.getElementById("logo").style.opacity = "1";
		document.getElementById("subtitle").style.visibility = "visible";
		document.getElementById("subtitle").style.opacity = "1";
		document.getElementById("scroll-down").style.visibility = "visible";
		document.getElementById("scroll-down").style.opacity = "1";
		document.getElementById("scroll-title").style.visibility = "visible";
		document.getElementById("scroll-title").style.opacity = "1";
		document.getElementById("divider-1").style.visibility = "hidden";
		document.getElementById("divider-1").style.opacity = "0";
		}

	else if ((scroll >= 20 && scroll <= 600) || (scroll >= 600 && scroll <= 1000)) {
		content.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/interlude.jpg) center no-repeat fixed #000000";
		content.style.backgroundSize = "cover";
		content.style.transition = "0.5s ease";
		document.getElementById("scroll-down").style.visibility = "hidden";
		document.getElementById("scroll-down").style.opacity = "0";
		document.getElementById("scroll-title").style.visibility = "hidden";
		document.getElementById("scroll-title").style.opacity = "0";
		document.getElementById("divider-1").style.visibility = "visible";
		document.getElementById("divider-1").style.opacity = "1";
		}

	else if ((scroll >= 1000 && scroll <= 1800)) {
		content.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/interview.jpg) center no-repeat fixed #000000";
		content.style.backgroundSize = "cover";
		content.style.transition = "0.5s ease";
		}

	else if (scroll >= 1600 && scroll <= 2600) {
		content.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/epilogue.jpg) center no-repeat fixed #000000";
		content.style.backgroundSize = "cover";
		content.style.transition = "0.5s ease";
		}

	}

$(document).ready(function(){
	$("a").on("click", function(event) {
	if (this.hash !== "") {
	event.preventDefault();
	var hash = this.hash;
	$("html, body").animate({
	scrollTop: $(hash).offset().top
	}, 1000, function(){
	});
	}
	});
	});

/* ------------------------- MOBILE VERSION ------------------------- */

if (window.innerHeight > window.innerWidth || window.innerWidth < 520){

	document.getElementById("subtitle").style.width = "100%";
	document.getElementById("subtitle").style.height = "100px";
	document.getElementById("subtitle").style.top = "30%";
	document.getElementById("credits").style.height = "150px";
	document.getElementById("credits").style.top = "2.5%";
	document.getElementById("typemoon").style.width = "500px";
	document.getElementById("typemoon").style.height = "150px";
	document.getElementById("insaneattic").style.width = "500px";
	document.getElementById("insaneattic").style.height = "150px";
	document.getElementById("logo-1").style.width = "100%";
	document.getElementById("logo-1").style.height = "58%";
	document.getElementById("logo-1").style.backgroundPositionY = "100%";
	document.getElementById("logo-2").style.width = "100%";
	document.getElementById("logo-2").style.height = "42%";
	document.getElementById("logo-2").style.backgroundPositionY = "0%";
	document.getElementById("scroll-down").style.width = "150px";
	document.getElementById("scroll-down").style.height = "300px";
	document.getElementById("scroll-down").style.borderRadius = "100px";
	document.getElementById("scroll-title").style.fontSize = "60px";

	}
