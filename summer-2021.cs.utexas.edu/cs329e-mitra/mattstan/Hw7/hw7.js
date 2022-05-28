var user_length;
var user_char;
var user_first;

var pass_length;
var pass_char;
var pass_one;

var rep_check;

function sub() {
  checku();
  checkp();
  checkp2();
}

function checku() {
  var user = document.getElementById('user').value;
  var length = user.length;

  if (length >= 6 && length <= 10) {
    user_length = true;
  } else {
    user_length = false;
  }


  for (i = 0; i < length; i++) {
    var let_char = user.charCodeAt(i);
    if (let_char >= 65 && let_char <= 90 || let_char >= 97 && let_char <= 122 || let_char >= 48 && let_char <= 57) {
      user_char = true;
    } else {
      user_char = false;
      break;
    }
  }

  let first = user.charCodeAt(0);
  if (first >= 48 && first <= 57) {
    user_first = false;
  } else {
    user_first = true;
  }

  disu();
}


function disu() {
  if (user_length == true) {
    document.getElementById('userl').innerHTML = "<span class = 'cor'>" + 'o' + "</span>";
  } else {
    document.getElementById('userl').innerHTML = "<span class = 'wrong'>" + 'x' + '</span>'
  }

  if (user_char == true) {
    document.getElementById('userlet').innerHTML = "<span class = 'cor'>" + 'o' + '</span>';
  } else {
    document.getElementById('userlet').innerHTML = "<span class = 'wrong'>" + 'x' + '</span>';
  }

  if (user_first == true) {
    document.getElementById('userfirst').innerHTML = "<span class = 'cor'>" + 'o' + '</span>';
  } else {
    document.getElementById('userfirst').innerHTML = "<span class = 'wrong'>" + 'x' + '</span>';
  }
}

function checkp() {
  var pass = document.getElementById('pass').value;

  if (pass.length >= 6 && pass.length <= 10) {
    pass_length = true;
  } else {
    pass_length = false;
  }


  for (i = 0; i < length; i++) {
    var let_charpass = pass.charCodeAt(i);
    if (let_charpass >= 65 && let_charpass <= 90 || let_charpass >= 97 && let_charpass <= 122 || let_charpass >= 48 && let_charpass <= 57) {
      pass_char = true;
    } else {
      pass_char = false;
      break;
    }
  }

  var char1;
  var char2;
  var char3;
  for (i = 0; i < length; i++) {
    var let_charpass2 = pass.charCodeAt(i);

    if (char1 != true) {
      if (let_charpass2 >= 65 && let_charpass2 <= 90) {
        char1 = true;
      } else {
        char1 = false;
      }
    }

    if (char2 != true) {

    }

    if (car3 != true) {

    }
  }

  if (char1 == true && char2 == true && char3 == true) {
    pass_one = true;
  } else {
    pass_one = false;
  }

  disp();
}

function checkp2() {
  var rep = document.getElementById('rep').textContent;
  var pass = document.getElementById('pass').value;

  if (rep != pass) {
    rep_check = false;
  } else {
    rep_check = true;
  }

  disp2();
}

function disp() {
  if (pass_length == true) {
    document.getElementById('length').innerHTML = "<span class = 'cor'>" + 'o' + '</span>';
  } else {
    document.getElementById('length').innerHTML = "<span class = 'wrong'>" + 'x' + '</span>'
  }

  if (pass_char == true) {
    document.getElementById('specnot').innerHTML = "<span class = 'cor'>" + 'o' + '</span>';
  } else {
    document.getElementById('specnot').innerHTML = "<span class = 'wrong'>" + 'x' + '</span>';
  }

  if (pass_one == true) {
    document.getElementById('firstlet').innerHTML = "<span class = 'cor'>" + 'o' + '</span>';
  } else {
    document.getElementById('firstlet').innerHTML = "<span class = 'wrong'>" + 'x' + '</span>';
  }
}

function disp2() {
	if (rep_check == true) {
		document.getElementById('match').innerHTML = "<span class = 'cor'>"+'o'+'</span>';
	}
	else {
		document.getElementById('match').innerHTML = "<span class = 'wrong'>"+'x'+'</span>';
	}
}	
