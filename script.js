var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var nameInput = document.getElementById('name')
var downloadBtn = document.getElementById('download-btn')

var image = new Image()
image.crossOrigin="anonymous";
image.src = 'https://raw.githubusercontent.com/dinogust/ecertificate/611f376ae2e24453c050a8da801450f34576d67f/certbase.jpg'
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
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'ISS 2024 E-CERTIFICATE - ' + nameInput.value
})
