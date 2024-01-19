console.log('Hi');

console.log('hello world!');


const text = document.getElementById('#text-for-change')
console.log(text.innerHTML='Crads:');

const getForm = document.querySelector('.card-form')
const nameOfCardInput = document.querySelector('.name-input')
const textInput = document.querySelector('.text-input')
const cardsBlock = document.querySelector('.cards')


const createCard = (title, text) => {
    const cardBlock = document.createElement('div')
    const cardTitle = document.createElement('h3')
    const cardText = document.createElement('p')
    
    cardBlock.className = 'card'
    cardTitle.textContent = title 
    cardText.textContent = text
    
    cardBlock.append(cardTitle, cardText)
    
    return cardBlock
}

const errorMessage = (text) => {
    const errorSpan = document.createElement('span')
    errorSpan.className = 'error-message'
    errorSpan.textContent = text
    
    return errorSpan
}


getForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const getTitle = nameOfCardInput.value
    const getText = textInput.value
    
    if(getTitle && getText) {
        const createdCardItem = createCard(getTitle, getText)
        cardsBlock.append(createdCardItem)
    } else {
        const block = getForm.closest('.create-input')
        block.append(errorMessage('Could you input corect data'))
    }
})

