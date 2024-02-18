

let seatCount = 0;
let seatLeft = 32;
let ticketPrice = 0;
const buttons = document.getElementsByClassName('kbd');
for (const btn of buttons) {
    btn.addEventListener('click', function () {
        const button = btn.innerText;
        // set background color
        btn.classList.add('bg-green-400');

        // seat count
        seatCount = seatCount + 1;
        setInnerTextAnyElement('count-seat', seatCount)

        // seat left
        seatLeft = seatLeft - 1;
        setInnerTextAnyElement('seat-left', seatLeft);


        if (seatCount > 4) {
            alert('You can not select seat more than 4');
            setInnerTextAnyElement('count-seat', 4);
            setInnerTextAnyElement('seat-left', 28);
            btn.classList.remove('bg-green-400');
            displaySeat.innerText = '';
            displayTitle.innerText = '';
            displayPrice.innerText = '';

        }

        //  display seat in container
        const displaySeat = getAnyElementById('display-seat');
        const displayTitle = getAnyElementById('display-title');
        const displayPrice = getAnyElementById('display-price');

        const p = document.createElement('p');
        p.innerText = button;

        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const p3 = document.createElement('p');
        p3.innerText = '550';

        displaySeat.appendChild(p);
        displayTitle.appendChild(p2);
        displayPrice.appendChild(p3);


        // display total price 
        ticketPrice = ticketPrice + 550;
        const totalTicketPrice = 'BDT' + ' ' + ticketPrice;

        setInnerTextAnyElement('total-price', totalTicketPrice);

        setInnerTextAnyElement('grand-price', totalTicketPrice);

    })
}




// input field number
const inputField = getAnyElementById('input-field')
inputField.addEventListener('keyup', function () {
    input = inputField.value;
    if (seatCount >= 1) {
        const nextButton = getAnyElementById('next-btn');
        nextButton.removeAttribute('disabled')
    }
    else {
        alert('At least you have to select one seat')
        inputField.value = '';
        const nextButton = getAnyElementById('next-btn');
        nextButton.setAttribute('disabled');
    }
})




// apply cupon
const cuponInput = getAnyElementById('cupon-input');
cuponInput.addEventListener('keyup', function () {
    const cupon = cuponInput.value;
    console.log(cupon);
    if (cupon === 'NEW15') {
        const applyButton = getAnyElementById('cupon-button');
        applyButton.addEventListener('click', function () {
            const grandTotal = ticketPrice * 15 / 100;
            const total = ticketPrice - grandTotal;
            const totalGrand = 'BDT' + ' ' + parseFloat(total);
            setInnerTextAnyElement('grand-price', totalGrand);
            hiddenAdd('cupon')

        })
    }
    else if (cupon === 'Couple 20') {
        const applyButton = getAnyElementById('cupon-button');
        applyButton.addEventListener('click', function () {
            const grandTotal = ticketPrice * 20 / 100;
            const total = ticketPrice - grandTotal;
            const totalGrand = 'BDT' + ' ' + parseFloat(total);
            setInnerTextAnyElement('grand-price', totalGrand);
            hiddenAdd('cupon')

        })
    }

})



// continue button
const continueButton = getAnyElementById('continue-btn');
continueButton.addEventListener('click', function () {

    inputField.value = '';
    setInnerTextAnyElement('count-seat', 0);
    setInnerTextAnyElement('seat-left', 0);
    setInnerTextAnyElement('total-price', 0);
    setInnerTextAnyElement('grand-price', 0);
    const displaySeat = getAnyElementById('display-seat');
    const displayTitle = getAnyElementById('display-title');
    const displayPrice = getAnyElementById('display-price');
    displaySeat.innerText = '';
    displayTitle.innerText = '';
    displayPrice.innerText = '';
    const inputName = getAnyElementById('name-input');
    inputName.value = '';
    const inputEmail = getAnyElementById('input-email');
    inputEmail.value = '';
    // hiddenRemove('cupon');
   

})


// get any element
function getAnyElementById(id) {
    const element = document.getElementById(id);
    return element;
}

// set inner text any element
function setInnerTextAnyElement(id, value) {
    document.getElementById(id).innerText = value;
}


// Add hidden class
function hiddenAdd(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

// remove hidden class
function hiddenRemove(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}