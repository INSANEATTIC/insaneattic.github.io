
/* ------------------------- DESKTOP VERSION START ------------------------- */

window.onload = function () {
	document.body.classList.add("loaded-hiding");
	window.setTimeout(function () {document.body.classList.add("loaded");document.body.classList.remove("loaded-hiding");}, 500);
	document.body.style.overflow = "auto";
	}

function slider(flag, num) {
	var current = $(".item.current"),
	next,
	index;
	if (!flag) {
	next = current.is(":last-child") ? $(".item").first() : current.next();
	index = next.index();
	} else if (flag === 'portrait') {
	next = $(".item").eq(num);
	index = num;
	} else {
	next = current.is(":first-child") ? $(".item").last() : current.prev();
	index = next.index();
	}
	next.addClass("current");
	current.removeClass("current");
	$(".portrait").eq(index).addClass("current").siblings().removeClass("current");
	}

$(".button").on("click", function() {
	var flag = $(this).is(".prev") ? true : false;
	slider(flag);
	});

$(".portrait").on("click", function() {
	if ($(this).is(".current")) return;
	var num = $(this).index();
	slider('portrait', num);
	});

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

/* ------------------------- DESKTOP VERSION END ------------------------- */
