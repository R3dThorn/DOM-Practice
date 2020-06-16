const docBody = document.querySelector('body')

var docMain = document.createElement('main')
var docImg = document.createElement('img')
var docButton = document.createElement('button')
var docButton2 = document.createElement('button')
var docButton3 = document.createElement('button')
var textInput = document.createElement('input')
var textInput2 = document.createElement('input')
var docA = document.createElement('a')

docImg.className = "image"
docImg.src = "DzIrufNUwAAebfD.jpg"

docA.className = "link"
docA.href = "https://www.youtube.com/watch?v=0UDRYDiZzsM"
docA.append("happy pride month")

docButton.append("remove")

docButton2.append("Remove by CSS")
docButton2.id = "button2"

docButton3.append("Add text")
docButton3.id = "button3"

textInput.type = "text"
textInput.id = "input"

textInput2.type = "text"
textInput2.id = "input2"

docMain.append(docImg, docA, docButton2, textInput, docButton3, textInput2)
docBody.append(docButton, docMain)

const button = document.querySelector('button')
button.addEventListener("click", function(){
    docMain.remove()
    alert("the gay has been removed. thus begins gay wrath month.")
})

const button2 = document.getElementById('button2')
button2.addEventListener("click", function(){
    let textValue = document.getElementById('input')
    if (textValue.value === ".image"){
        docImg.remove()
    } else if (textValue.value === ".link"){
        docA.remove()
    } else {
        alert("invalid css selector entered")
    }
})

const button3 = document.getElementById("button3")
button3.addEventListener("click", function(){
    let textValue = document.getElementById('input2')
    if(textValue.value === ""){
        return alert("invalid input")
    } else {
        let docDiv = document.createElement('div')
        docDiv.append(textValue.value)
        docMain.append(docDiv)
    }
})