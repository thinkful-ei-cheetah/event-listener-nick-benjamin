'use strict'

function fizzbuzzer(num) {
    if (num % 15 === 0) return 'fizzbuzz';
    if (num % 5 === 0) return 'fizz';
    if (num % 3 === 0) return 'buzz';
    return num;
}

function fizzbuzzerUpto(countTo) {
    for (let i = 1; i <= countTo; i++) {
        generateDiv(fizzbuzzer(i));
    }
}

function generateDiv(num) {

let classAdd = num;

if (classAdd === 'fizz') {
    classAdd = " fizz";
} else if (classAdd === 'buzz') {
    classAdd = " buzz";
} else if (classAdd === 'fizzbuzz') {
    classAdd = ' fizzbuzz';
}

$('.js-results').append(
    `<div class= "fizz-buzz-item ${classAdd}">
        <span>${classAdd}</span>
    </div>`
);
}

function main () {
    $('#number-chooser').on('submit', event => {
    event.preventDefault();
    $('.js-results').html("");

    const numberChoice = $('#number-choice').val();
    fizzbuzzerUpto(numberChoice);  
    
    event.target.reset();
     
});
};

$(main);
