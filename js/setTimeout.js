var h = 0;

function addH() {
	if(h < 1) {
		//						h = h + 5;
		$(".WCL").css("visibility","visible");
	} else {
		return;
	}
	setTimeout("addH()", 800);
}
window.onload = function showAds() {
	addH();
	setTimeout("subH()", 1500);
}

function subH() {
	if(h >= 0) {
		//						h -= 5;
			$(".WCL").css("visibility","hidden");
		//						alert(h);
	} else {
			$(".WCL").css("visibility","hidden");

	}
	setTimeout("subH()", 1500);
}

