const myName = document.getElementById('name');

const myButton = document.getElementById('change-button');


myButton.addEventListener('click', () => {
    const myInput = document.getElementById('word-input');

    console.log(myInput.value);

    myName.textContent = myInput.value;
    myName.style.color = 'green';
    myName.style.fontFamily = 'Permanent Marker';
});