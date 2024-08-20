
export const displayFail = () => {
    const failMessage = document.querySelector('.contactfail');
    console.log(failMessage)
    failMessage.classList.remove('visually-hidden');
}