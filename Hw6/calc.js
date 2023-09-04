var ri = document.getElementById("interest").value;
var P = document.getElementById("prin").value;
var n = document.getElementById("loan").value;
var Rp;

function monthly(P,r,n) {
	Rp = P * r / (1 - (1 / (1 + r)**n));
	return Rp;
}

function sumpay(Rp,n) {
	var tot = Rp * n;
	return tot;
}

function inttot(sumMon, P) {
	var tot = sumMon - P;
	return tot;
}

function calculate() {
	var ri = document.getElementById("interest").value;
	var P = document.getElementById("prin").value;
	var n = document.getElementById("loan").value;
	if (isNaN(n) || isNaN(P) || isNaN(ri)) {
		document.getElementById('error').innerHTML = "Error: values must be a number.";
		return;	
	}
	if (n == '' || P == '' || ri == '') {
		document.getElementById('error').innerHTML = "Error: please input a value.";
		return;	
	}
	if (n < 0 || P < 0 || ri < 0) {
		document.getElementById('error').innerHTML = "Error: values cannot be less than zero.";
		return;	
	}
	

	var Rp = monthly(P,ri,n);
	var sumMon = sumpay(Rp, n, P);
	var interestTot = inttot(sumMon, P);
	document.getElementById('monthly').innerHTML = Math.round(Rp * 100)/100;
	document.getElementById('sum').innerHTML = Math.round(sumMon * 100)/100;
	document.getElementById('intTot').innerHTML = Math.round(interestTot * 100)/100;
}
function clear() {
	document.getElementById('prin').value = ' ';
	document.getElementById('loan').value = ' ';
	document.getElementById('interest').value = ' ';
}