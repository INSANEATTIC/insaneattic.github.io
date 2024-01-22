window.onload = function () {
	document.body.classList.add("loaded-hiding");
	window.setTimeout(function () {
	document.body.classList.add("loaded");
	document.body.classList.remove("loaded-hiding");
	}, 500);
	}

var body = document.getElementsByTagName("body")[0];
body.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/cover.png) center no-repeat fixed #000000";
body.style.backgroundSize = "cover";
body.style.transition = "0s";

window.onscroll = function (event) {

	var scroll = window.pageYOffset;

	if (scroll <= 20) {
		body.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/cover.png) center no-repeat fixed #000000";
		body.style.backgroundSize = "cover";
		body.style.transition = "0.5s ease";
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
		body.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/interlude.png) center no-repeat fixed #000000";
		body.style.backgroundSize = "cover";
		body.style.transition = "0.5s ease";
		document.getElementById("scroll-down").style.visibility = "hidden";
		document.getElementById("scroll-down").style.opacity = "0";
		document.getElementById("scroll-title").style.visibility = "hidden";
		document.getElementById("scroll-title").style.opacity = "0";
		document.getElementById("divider-1").style.visibility = "visible";
		document.getElementById("divider-1").style.opacity = "1";
		}

	else if ((scroll >= 1000 && scroll <= 1800)) {
		body.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/interview.png) center no-repeat fixed #000000";
		body.style.backgroundSize = "cover";
		body.style.transition = "0.5s ease";
		}

	else if (scroll >= 1600 && scroll <= 2600) {
		body.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/epilogue.png) center no-repeat fixed #000000";
		body.style.backgroundSize = "cover";
		body.style.transition = "0.5s ease";
		}

        }

function openLinks() {

	const linkBlock = document.getElementById("links");
	const linkButton = document.getElementById("links-button");
	var blockTop = getComputedStyle(linkBlock).top;
	var buttonTop = getComputedStyle(linkButton).top;

	linkBlock.style.top = "0px";
	linkBlock.style.boxShadow = "0px 0px 10px #000000";
	linkButton.style.top = "150px";
	linkButton.innerHTML = "<span id='button-title'>✕ ЗАКРЫТЬ</span>";

	if (blockTop == "0px" && buttonTop == "150px") {
		linkBlock.style.top = "-150px";
		linkBlock.style.boxShadow = "none";
		linkButton.style.top = "0px";
		linkButton.innerHTML = "<span id='button-title'>&#9776; ОТКРЫТЬ</span>";
		}

}

$(document).ready(function(){
	$("a").on('click', function(event) {
	if (this.hash !== "") {
	event.preventDefault();
	var hash = this.hash;
	$('html, body').animate({
	scrollTop: $(hash).offset().top
	}, 1000, function(){
	});
	}
	});
	});
