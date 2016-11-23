// 触屏支持  begin
if (is_touch_device()) {
	$(".poem-left,.poem-right").hide();
	$(".poem").on("swipeleft", function() {
		showRight();
	});
	$(".poem").on("swiperight", function() {
		showLeft();
	});
}
// 触屏支持 end

var poem_index = 0;
var poems = [];
$.ajax({
	url : "/poem/data/poem.json",
	success : function(result) {
		poems = result;
		poem_index = Math.round(poems.length / 2);
		showAll();

		if (!is_touch_device()) {
			$(".poem-left").fadeTo(2000, 0);
			$(".poem-right").fadeTo(2000, 0);
		}
	}
});

function showAll() {
	if (0 < poem_index && poem_index < poems.length - 1) {
		show(poems[poem_index - 1], "poem-left");
		show(poems[poem_index], "poem");
		show(poems[poem_index + 1], "poem-right");
	}
}

function show(poem, position) {
	$("." + position + " .title").text(poem.title);
	$("." + position + " .s1").text(poem.s1);
	$("." + position + " .s2").text(poem.s2);
	$("." + position + " .s3").text(poem.s3);
	$("." + position + " .s4").text(poem.s4);
	$("." + position + " .date").text("（" + poem.date + "）");
}

function showLeft() {
	if (poem_index > 1) {
		poem_index--;
	}
	$(".poem").fadeTo(1000, 0.1, showAll);
	$(".poem").fadeTo(1000, 1);
}
function showRight() {
	if (poem_index < poems.length-2) {
		poem_index++;
	}
	$(".poem").fadeTo(1000, 0.1, showAll);
	$(".poem").fadeTo(1000, 1);
}

$(".poem-left").click(function() {
	showLeft();
});
$(".poem-right").click(function() {
	showRight();
});

$(".poem-left").hover(function() {
	$(".poem-left").fadeTo(1000, 1);
}, function() {
	$(".poem-left").fadeTo(1000, 0);
});
$(".poem-right").hover(function() {
	$(".poem-right").fadeTo(1000, 1);
}, function() {
	$(".poem-right").fadeTo(1000, 0);
});
