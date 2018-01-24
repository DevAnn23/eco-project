//'use strict';
jQuery
$('input[type=range]').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;

  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
}).trigger('input');

window.onload = function(){
var input = document.querySelector("input"),
	night = document.querySelector(".night"),
	valueOpacity = document.querySelector(".valueOpacity");
night.style.opacity = input.value / 100;

function updateValue() {
	night.style.opacity = this.value / 100;
	valueOpacity.innerHTML = this.value + "%";
}

input.addEventListener('change', updateValue);
input.addEventListener('mousemove', updateValue);

};


// VUE ***

var app = new Vue({
	el: '#app',
	data: {
		message: ''
	}
})

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString(),

	}
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: false,

	}
})

// Social media
var yScrollAxis = Math.floor(window.pageYOffset);

window.onscroll = function () {
	var yScrollAxis = Math.floor(window.pageYOffset);
	if (yScrollAxis > 300) {
		app.message = 'Yes';
		app3.seen = true;
	} else {
		app.message = 'No';
		app3.seen = false;
	}
}
