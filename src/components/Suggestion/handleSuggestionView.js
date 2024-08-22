export const showSuggestion = () => {
    console.log('2')
    const suggestion = document.querySelector('.suggestion')
    console.log(suggestion.classList)
    suggestion.classList.add('you')
    console.log(suggestion.classList)
}

export const hideSuggestion = () => {
    //const suggestion = document.querySelector('.suggestion')
    //suggestion.classList.add('hide')
}