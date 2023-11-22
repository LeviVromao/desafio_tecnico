const inputNumber = document.querySelector('#number')
const form = document.querySelector('#form')
const errorComponent = document.querySelector('.error')
const sumComponent = document.querySelector('.sumNumber')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if(inputNumber.value) {
        const data = await fetch('https://desafio-t-cnico.vercel.app/number', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({number: inputNumber.value})
        })

        const res = await data.json()
        if(res.message) {
            errorComponent.style.display = 'block'
            errorComponent.textContent = res.message
            setTimeout(() => {
                errorComponent.style.display = 'none'
            }, 3000)
        } else {
            sumComponent.textContent = res.sum
        }
    }
})