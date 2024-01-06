console.log('Hi');

console.log('hello world!');


const text = document.getElementById('#text-for-change')
console.log(text.innerHTML='Crads:');

const getForm = document.querySelector('.card-form')
const nameOfCardInput = document.querySelector('.name-input')
const textInput = document.querySelector('.text-input')
const cardsBlock = document.querySelector('.cards')

getForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const getName = nameOfCardInput.value
    const getText = textInput.value

    console.log(getName, getText);
})