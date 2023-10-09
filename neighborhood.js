const randomBtn = document.querySelector('#random-button')
const restsArr = ['Q House','Culinary Dropout','Denver Bisquit Company','sắp sửa','Spice Room']

const getRandom = evt => {
    evt.preventDefault();

    const randRest = restsArr[Math.floor((Math.random() * restsArr.length))];
    const randomContainer = document.querySelector('#random-container');
    randomContainer.innerHTML = randRest;
}   

randomBtn.addEventListener('click', getRandom)


