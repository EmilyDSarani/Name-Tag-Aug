const myName = document.getElementById('name');

const myButton = document.getElementById('change-button');

myButton.addEventListener('click', () => {
    const myInput = document.getElementById('word-input');
    

    console.log(myInput.value);

    myName.textContent = myInput.value;
    myName.style.color = 'green';
    myName.style.fontFamily = 'Permanent Marker';
});


const myPronoun = document.getElementById('pronouns');

const mySelf = document.getElementById('change');

mySelf.addEventListener('click', () => {
    const myId = document.getElementById('pro-input');
    

    console.log(myId.value);

    myPronoun.textContent = myId.value;
    myPronoun.style.color = 'green';
    myPronoun.style.fontFamily = 'Permanent Marker';
});