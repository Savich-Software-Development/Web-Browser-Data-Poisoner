/*
TODO: swap inputs for buttons then listen for button click which will start an event to modify a .json
    then based off of that JSON the button will change to toggled on/off and will determine how a process runs
 */


const button = document.querySelector('button');

button.addEventListener('click', event => {
    button.textContent = `Click count: ${event.detail}`;
});
