//Pass a function into an event listener that, when called, sends a fetch request then does something with the retreived data

const init = () => {
    const inputForm = document.querySelector('form') 
    inputForm.addEventListener('submit', submitHandler)
    function submitHandler(event){
        event.preventDefault()
        const input = document.querySelector('input#searchByID')
        console.log(input)

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')

            title.innerText = data.title
            summary.innerText = data.summary
        })
    }
}
document.addEventListener('DOMContentLoaded', init)