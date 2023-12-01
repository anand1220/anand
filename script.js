const form = document.querySelector('form');
const resetButton = document.querySelector('.reset');
let root = document.querySelector('.result');
let icon = document.querySelector('.icon');
let links = document.getElementsByTagName('a');

icon.addEventListener('click', function () {
    for (let i = 1; i < links.length; i++) {
        if (links[i].style.display === "block") {
            links[i].style.display = "none";
        } else {
            links[i].style.display = "block";
        }
    }
})




// form submit
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let num = parseInt(document.querySelector('#number').value);


    if (num === '' || isNaN(num) || num < 0) {
        root.innerHTML = 'Please enter valid number';
    } else {
        let result = sqroot(num);
        root.innerHTML = `Square root of ${num} is ${result}`;
    }
})

function sqroot(num) {
    return Math.sqrt(num);
}

resetButton.addEventListener('click', function () {

    document.querySelector('#number').value = '';
    root.innerHTML = '';
})