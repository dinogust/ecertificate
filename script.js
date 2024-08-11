var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var nameInput = document.getElementById('name')
var downloadBtn = document.getElementById('download-btn')

var image = new Image()
image.crossOrigin="anonymous";
image.src = 'certbase.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px Arial'
	ctx.fillStyle = '#29e'
	ctx.fillText(nameInput.value, 40, 180)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

testA.addEventListener('click', function () {
	testA.href = canvas.toDataURL('image/jpg')
	testA.download = 'ISS 2024 E-CERTIFICATE - ' + nameInput.value
})
