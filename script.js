//'use strict';
jQuery
$('input[type=range]').on('input', function (e) {
	var min = e.target.min,
		max = e.target.max,
		val = e.target.value;

	$(e.target).css({
		'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
	});
}).trigger('input');

window.onload = function () {
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

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: false,

	}
})
var app8 = new Vue({
  el: '#app8',
  data: {
    counter: 0,
    guests: ['Adam', 'Anna', 'Jan']
  },
  methods: {
    addCategory() {

		if(!(this.guestName === undefined || this.guestName === "" )){
		this.guests.push(this.guestName);
		}
		else{
			alert("Pole nie może byc puste")
		}
		this.guestName = '';
    }
  }
})




// Social media
var yScrollAxis = Math.floor(window.pageYOffset);

window.onscroll = function () {
	var yScrollAxis = Math.floor(window.pageYOffset);
	if (yScrollAxis > 300) {
		app3.seen = true;
	} else {
		app3.seen = false;
	}
}
