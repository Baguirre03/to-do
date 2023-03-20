import './style.css'

const newElement = document.createElement('div')
newElement.textContent = 'hello world'
newElement.classList.add('element')
const body = document.querySelector('body')
body.appendChild(newElement)

