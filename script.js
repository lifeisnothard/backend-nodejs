var button = document.querySelector('button')

function greeting (message) {
	console.log(message)
}

button.onclick = function () {
	setTimeout(() => greeting('Hello JavaScript'), 5000)
}