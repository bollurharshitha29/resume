
document.querySelector(".fa-contao").addEventListener('click', function() {
	window.open('https://www.codechef.com/users/kura_shiva', '_blank');
});

document.querySelector(".fa-header").addEventListener('click', function() {
	window.open('https://www.hackerrank.com/kura_shiva?hr_r=1', '_blank');
});

document.querySelector(".fa-github").addEventListener('click', function() {
	window.open('https://github.com/kurashiva11', '_blank');
});

var mail = document.querySelector(".fa-envelope");
mail.addEventListener('click', function() {
	// window.open('mailto:kurashiva11@gmail.com');
	alert('my mail : kurashiva11@gmail.com is copied to clicpboard');
	const span = document.querySelector("span");
	document.execCommand("copy");
});
 
mail.addEventListener("copy", function(event) {
	event.preventDefault();
	if (event.clipboardData) {
		event.clipboardData.setData("text/plain", "kurashiva11@gmail.com");
		console.log(event.clipboardData.getData("text"))
	}
});