

let seatCount = 0;
let seatLeft = 40;
const buttons = document.getElementsByClassName('kbd');
for(const btn of buttons){
    btn.addEventListener('click', function(){

       
        const button = btn.innerText;

        // set background color
        btn.classList.add('bg-green-400');
        
        // seat count
        seatCount = seatCount + 1;
        setInnerTextAnyElement('count-seat', seatCount)

        // seat left
         seatLeft = seatLeft - 1;
         setInnerTextAnyElement('seat-left', seatLeft);

        //  display seat in container
        const displaySeat = getAnyElementById('display-seat');
        const displayTitle = getAnyElementById('display-title');
        const displayPrice = getAnyElementById('display-price')
        
        const p = document.createElement('p');
        p.innerText = button;

        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const p3 = document.createElement('p');
        p3.innerText = '500' ;
         
        displaySeat.appendChild(p);
        displayTitle.appendChild(p2);
        displayPrice.appendChild(p3);
        

        

           
       
    })
}






// add any class
function addAnyClass(id){
    const element = document.getElementById(id);
    element.classList.add('hidden');

}

// remove any class
function removeAnyClass(id){
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

// get any element
function getAnyElementById(id){
    const element = document.getElementById(id);
    return element;
}
// set inner text any element
function setInnerTextAnyElement(id,value){
    document.getElementById(id).innerText = value;
}