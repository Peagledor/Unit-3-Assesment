const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

const favColor = evt => {
    evt.preventDefault();

    alert('My favorite color is purple.');
};

const favPlace = evt => {
    evt.preventDefault();

    alert('My favorite place is anywhere within Yosemite National Park in California.')
}

const favRitual = evt => {
    evt.preventDefault();

    alert('My favorite ritual is practicing mindfulness in everything I do.')
}

colorBtn.addEventListener('click', favColor);
placeBtn.addEventListener('click', favPlace);
ritualBtn.addEventListener('click', favRitual);