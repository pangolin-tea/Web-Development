/*
 Define variables for the values computed by the grabber event 
 handler but needed by mover event handler
*/
var diffX, diffY, theElement;


// The event handler function for grabbing the word
function grabber(event) {

	// Set the global variable for the element to be moved

	theElement = event.currentTarget;

	// Determine the position of the word to be grabbed,
	//  first removing the units from left and top

	var posX = parseInt(theElement.style.left);
	var posY = parseInt(theElement.style.top);

	// Compute the difference between where it is and
	// where the mouse click occurred

	diffX = event.clientX - posX;
	diffY = event.clientY - posY;

	// Now register the event handlers for moving and
	// dropping the word

	document.addEventListener("mousemove", mover, true);
	document.addEventListener("mouseup", dropper, true);

	// Stop propagation of the event and stop any default
	// browser action

	event.stopPropagation();
	event.preventDefault();

} //** end of grabber

// *******************************************************

// The event handler function for moving the word

function mover(event) {
	// Compute the new position, add the units, and move the word

	theElement.style.left = (event.clientX - diffX) + "px";
	theElement.style.top = (event.clientY - diffY) + "px";

	// Prevent propagation of the event

	event.stopPropagation();
} //** end of mover

// *********************************************************
// The event handler function for dropping the word

function dropper(event) {

	// Unregister the event handlers for mouseup and mousemove

	document.removeEventListener("mouseup", dropper, true);
	document.removeEventListener("mousemove", mover, true);

	// Prevent propagation of the event

	event.stopPropagation();
} //** end of dropper

var second = 0;
var minute = 0;
var hour = 0;
var day = 0;
var year = 0;

var x = setInterval(function() {

	second += 1;
	if (second == 60) {
		second = 0;
		minute += 1;
	}
	if (minute == 60) {
		minute = 0;
		hour += 1;
	}
	if (hour == 24) {
		hour = 0;
		day += 1;
	}
	if (day == 365) {
		day = 0;
		year += 1;
	}

	document.getElementById('time').innerHTML = year + ' years : ' + day + ' days : ' + hour + ' hours : ' + minute + ' minutes : ' + second + ' seconds ';

}, 1000);

var number;

function rando(num) {
	number = Math.floor(Math.random() * num);
}

var set1 = ['./images1/img1-1.jpg', './images1/img1-2.jpg', './images1/img1-3.jpg', './images1/img1-4.jpg', './images1/img1-5.jpg', './images1/img1-6.jpg', './images1/img1-7.jpg', './images1/img1-8.jpg', './images1/img1-9.jpg', './images1/img1-10.jpg', './images1/img1-11.jpg', './images1/img1-12.jpg'];
var set2 = ['./images2/img2-1.jpg', './images2/img2-2.jpg', './images2/img2-3.jpg', './images2/img2-4.jpg', './images2/img2-5.jpg', './images2/img2-6.jpg', './images2/img2-7.jpg', './images2/img2-8.jpg', './images2/img2-9.jpg', './images2/img2-10.jpg', './images2/img2-11.jpg', './images2/img2-12.jpg'];
var set3 = ['./images3/img3-1.jpg', './images3/img3-2.jpg', './images3/img3-3.jpg', './images3/img3-4.jpg', './images3/img3-5.jpg', './images3/img3-6.jpg', './images3/img3-7.jpg', './images3/img3-8.jpg', './images3/img3-9.jpg', './images3/img3-10.jpg', './images3/img3-11.jpg', './images3/img3-12.jpg'];
var ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var sets = [0,1,2,3,4,5,6,7,8,9,10,11];

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

sets = shuffle(sets);

function pics() {
	rando(3);
	console.log(number);
	if (number == 0) {
		for (let i = 0; i < 12; i++) {
			var image = "<img src = '" + set1[sets[i]] + "' alt = '" + ids[i] + "' length = '100' width = '100'>";
			console.log(i);
			console.log(image);
			console.log(ids[i]);
			document.getElementById(ids[i]).innerHTML = image;
		}
	}
	if (number == 1) {
		for (let i = 0; i < 12; i++) {
			var image = "<img src = '" + set2[sets[i]] + "' alt = '" + ids[i] + "' length = '100' width = '100'>";
			console.log(i);
			console.log(image);
			console.log(ids[i]);
			document.getElementById(ids[i]).innerHTML = image;
		}
	}
	if (number == 2) {
		for (let i = 0; i < 12; i++) {
			var image = "<img src = '" + set3[sets[i]] + "' alt = '" + ids[i] + "' length = '100' width = '100'>";
			console.log(i);
			console.log(image);
			console.log(ids[i]);
			document.getElementById(ids[i]).innerHTML = image;
		}
	}
}

function stop(){
	clearInterval(x);
}

pics();

var xs = [];
var ys = [];
var back = document.getElementById('back');
function cleared(){
	for (let i = 0; i < 12; i++) {
		var ele = document.getElementById(ids[i]); 
		var xcoor = parseInt(ele.style.left) + 50;
		var ycoor = parseInt(ele.style.top) - 50;
		xs.push(xcoor);
		ys.push(ycoor);
	}
	
	
}

cleared();
console.log(xs);