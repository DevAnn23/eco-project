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

var app = new Vue({
	el: '#app',
	data: {
		categories: ['Frontend', 'Backend', 'Marketing', 'Po godzinach'],
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
var app4 = new Vue({
	el: '#app4',
	data: {
		categories: ['Frontend', 'Backend', 'Marketing', 'Po godzinach']
	}
})
var app8 = new Vue({
  el: '#app8',
  data: {
    counter: 0,
    categories: ['Frontend', 'Backend']
  },
  methods: {
    addCategory() {
		if(!(this.category === '')){
		this.categories.push(this.category);
		}
		else{
			alert("Pole nie może byc puste")
		}
      this.category = '';
    }
  }
})
function addTask(){
	var inputTask = document.querySelector(".inputTask"),
		submitTask = document.querySelector(".submitTask");
	app4.categories.push( 'New Task');
	alert(app5.counter);
}



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
