
/* ------------------------- DESKTOP VERSION ------------------------- */

window.onload = function () {
	document.body.classList.add("loaded-hiding");
	window.setTimeout(function () {document.body.classList.add("loaded");document.body.classList.remove("loaded-hiding");}, 500);
	document.body.style.overflow = "auto";
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

if (window.innerHeight > window.innerWidth) {

	var pseudoLoader = document.head.appendChild(document.createElement("style"));
	var pseudoScroll = document.head.appendChild(document.createElement("style"));
	var content = document.getElementById("content");

	var title = document.getElementsByClassName("title");
	for (var i = 0; i < title.length; i++ ) {title[i].style.position = "relative"; title[i].style.top = "132px";}

	var description = document.getElementsByClassName("description");
	for (var i = 0; i < description.length; i++ ) {description[i].style.position = "relative"; description[i].style.top = "132px";}

	var video = document.getElementsByClassName("video");
	for (var i = 0; i < video.length; i++ ) {video[i].style.top = "232px";}

	pseudoLoader.innerHTML = ".dual-ring:after {width: 200px; height: 200px; border: 30px solid; border-color: #7F499D transparent #7F499D transparent;}";
	pseudoScroll.innerHTML = "#scroll-down:before {font-size: 100px;}";

	content.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/cover-m.jpg) center no-repeat fixed #000000";
	content.style.backgroundSize = "cover";
	content.style.transition = "0s";

	document.querySelector(".preloader-row").style.height = "260px";
	document.querySelector(".preloader-row").style.top = "calc(50% - 100px)";
	document.getElementById("credits").style.height = "150px";
	document.getElementById("credits").style.top = "2.5%";
	document.getElementById("typemoon").style.width = "30%";
	document.getElementById("typemoon").style.height = "100%";
	document.getElementById("typemoon").style.position = "absolute";
	document.getElementById("typemoon").style.left = "0%";
	document.getElementById("insaneattic").style.width = "30%";
	document.getElementById("insaneattic").style.height = "100%";
	document.getElementById("insaneattic").style.position = "absolute";
	document.getElementById("insaneattic").style.right = "0%";
	document.getElementById("logo").style.height = "60%";
	document.getElementById("logo").style.bottom = "20%";
	document.getElementById("logo").style.backgroundImage = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/logo-m.png)";
	document.getElementById("logo").style.backgroundRepeat = "no-repeat";
	document.getElementById("logo").style.backgroundPosition = "center";
	document.getElementById("logo").style.backgroundSize = "contain";
	document.getElementById("subtitle").style.display = "none";
	document.getElementById("logo-1").style.display = "none";
	document.getElementById("logo-2").style.display = "none";
	document.getElementById("scroll-down").style.display = "none";
	document.getElementById("scroll-down").style.width = "150px";
	document.getElementById("scroll-down").style.height = "300px";
	document.getElementById("scroll-down").style.border = "10px solid #FFFFFF";
	document.getElementById("scroll-down").style.borderRadius = "100px";
	document.getElementById("scroll-down").style.boxShadow = "inset 0px 0px 25px #FFFFFF";
	document.getElementById("scroll-title").style.display = "none";
	document.getElementById("scroll-title").style.fontSize = "60px";
	document.getElementById("scroll-title").style.opacity = "0";
	document.getElementById("divider-1").style.top = "0";
	document.getElementById("divider-2").style.top = "0";
	document.getElementById("divider-3").style.top = "0";
	document.getElementById("footer").style.top = "calc(100% + 2432px)";

	window.onscroll = function (event) {

		var scroll = window.pageYOffset;

		if (scroll <= 20) {
			content.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/cover-m.jpg) center no-repeat fixed #000000";
			content.style.backgroundSize = "cover";
			content.style.transition = "0.5s ease";
			document.getElementById("divider-1").style.visibility = "hidden";
			document.getElementById("divider-1").style.opacity = "0";
			}

		else if (scroll > 20) {
			content.style.background = "url(https://raw.githubusercontent.com/INSANEATTIC/insaneattic.github.io/main/heavensfeel/assets/background-m.jpg) center no-repeat fixed #000000";
			content.style.backgroundSize = "cover";
			content.style.transition = "0.5s ease";
			document.getElementById("divider-1").style.visibility = "visible";
			document.getElementById("divider-1").style.opacity = "1";
			}

		}

	}
