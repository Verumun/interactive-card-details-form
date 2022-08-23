'use strict'

new Cleave('.creditcard', {
    creditCard:true,
    onCreditCardTypeChange: function(type){}
})


// display
const cardDisplay = document.querySelector('.card-number');
const cardInput = document.querySelector('.creditcard');
const nameHolderDisplay = document.querySelector('.name-holder');
const nameHolderInput = document.querySelector('.name-input');

// month and year display 
const monthDisplay = document.querySelector('.month');
const yearDisplay = document.querySelector('.year');



// Cvv
const cvvDisplay = document.querySelector('.cvv');


// Inputs
const monthInput = document.querySelector('.monthInput');
const monthID = document.getElementById('monthInput');

const yearID = document.getElementById('yearInput');
const yearInput = document.querySelector('.yearInput');


const cvvInput = document.querySelector('.cvvInput');

cardInput.addEventListener('input', function(){

    if(cardInput.value === ""){
        cardDisplay.textContent = "0000 0000 0000 0000";
    }else{

        cardDisplay.textContent = cardInput.value;
    }
})

nameHolderInput.addEventListener('input', function(){
    if(nameHolderInput.value === ''){
        nameHolderDisplay.textContent = 'JANE APPLESSED';
    }else{
        nameHolderDisplay.textContent = nameHolderInput.value;
    }
})

monthInput.addEventListener('input', function(){
    if(monthInput.value === ''){
        monthDisplay.textContent = '00';
    }else{
        monthDisplay.textContent = monthInput.value;
    }
})

yearInput.addEventListener('input', function(){
    if(yearInput.value === ''){
        yearDisplay.textContent = '00';
    }else{
        yearDisplay.textContent = yearInput.value;
    }
})

cvvInput.addEventListener('input', function(){
    if(cvvInput.value === ''){
        cvvDisplay.textContent = '00';
    }else{
        cvvDisplay.textContent = cvvInput.value;
    }
})



// Auto move
function autoJump(field, moveto){
    if(field.value.length >= field.maxLength){
        document.getElementById(moveto).focus();
    }
}
