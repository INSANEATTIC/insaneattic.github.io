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
