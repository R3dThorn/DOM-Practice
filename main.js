const docBody = document.querySelector('body')

var docMain = document.createElement('main')
var docImg = document.createElement('img')
var docButton = document.createElement('button')
var docA = document.createElement('a')

docImg.className = "image"
docImg.src = "DzIrufNUwAAebfD.jpg"
docA.className = "link"
docA.href = "https://www.youtube.com/watch?v=0UDRYDiZzsM"
docA.append("happy pride month")
docButton.append("remove")

docMain.append(docImg, docA)
docBody.append(docButton, docMain)

const button = document.querySelector('button')
button.addEventListener("click", function(){
    docMain.remove()
})