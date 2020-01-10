new Vue({
  el: '#app',
 
  vuetify: new Vuetify(),
  data: () => ({
    drawer: null,
    progress:0,
  })
})

let handle = function()
{
var radios = document.getElementsByName('Completed');
var radios2 = document.getElementsByName('Completed2');
var radios3 = document.getElementsByName('Completed3');

for (var i = 0, length = radios2.length; i < length; i++) {
  if (radios2[1].checked && radios[1].checked && radios3[1].checked) {
    // do whatever you want with the checked radio
    movetozero();
    // only one radio can be logically checked, don't check the rest
    break;
  }
  else if (radios2[0].checked && radios[0].checked && radios3[0].checked) {
    // do whatever you want with the checked radio
    move3();
    // only one radio can be logically checked, don't check the rest
    break;
  }
    else if (radios2[0].checked && radios[0].checked || radios[0].checked && radios3[0].checked || radios2[0].checked && radios3[0].checked)
      {
       move2();
    // only one radio can be logically checked, don't check the rest
    break;
      }
    else if (radios[0].checked || radios2[0].checked || radios3[0].checked)
      {
       move();
    // only one radio can be logically checked, don't check the rest
    break;
      }
   
 }
}
let handle2 = function()
{
var radios = document.getElementsByName('Completed');
var radios2 = document.getElementsByName('Completed2');
var radios3 = document.getElementsByName('Completed3');
  for (var i = 0, length = radios2.length; i < length; i++) {
    if (radios2[1].checked && radios[1].checked && radios3[1].checked) {
    // do whatever you want with the checked radio
    movetozero();
    // only one radio can be logically checked, don't check the rest
    break;
  }
  else if (radios2[0].checked && radios[0].checked && radios3[0].checked) {
    // do whatever you want with the checked radio
    move3();
    // only one radio can be logically checked, don't check the rest
    break;
  }
   
    else if (radios2[0].checked && radios[0].checked || radios[0].checked && radios3[0].checked || radios2[0].checked && radios3[0].checked)
      {
       move2();
    // only one radio can be logically checked, don't check the rest
    break;
      }
    else if (radios[0].checked || radios2[0].checked || radios3[0].checked)
      {
       move();
    // only one radio can be logically checked, don't check the rest
    break;
      }
   
 }
}
let handle3 = function()
{
var radios = document.getElementsByName('Completed');
var radios2 = document.getElementsByName('Completed2');
var radios3 = document.getElementsByName('Completed3');
for (var i = 0, length = radios2.length; i < length; i++) {
  if (radios2[1].checked && radios[1].checked && radios3[1].checked) {
    // do whatever you want with the checked radio
    movetozero();
    // only one radio can be logically checked, don't check the rest
    break;
  }
  else if (radios2[0].checked && radios[0].checked && radios3[0].checked) {
    // do whatever you want with the checked radio
    move3();
    // only one radio can be logically checked, don't check the rest
    break;
  }
    else if (radios2[0].checked && radios[0].checked || radios[0].checked && radios3[0].checked || radios2[0].checked && radios3[0].checked)
      {
       move2();
    // only one radio can be logically checked, don't check the rest
    break;
      }
    else if (radios[0].checked || radios2[0].checked || radios3[0].checked)
      {
       move();
    // only one radio can be logically checked, don't check the rest
    break;
      }
   
 }
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 33.3) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

var i = 0;
function movetozero() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 11) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = 0 + "%";
      }
    }
  }
}

var i = 0;
function move2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 66.6) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

var i = 0;
function move3() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}