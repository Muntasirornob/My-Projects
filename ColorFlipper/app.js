const colors = ["green", "blue", "rgba(133,122,200)", "#f15025", "violet"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function() {
    
    // get random number 0 - 3 colors[0]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber() {
    return Math.trunc(Math.random() * colors.length) ;
}
