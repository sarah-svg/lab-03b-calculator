// import functions and grab DOM elements
const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumButton = document.getElementById('sum-button');
const sumSpan = document.getElementById('sum-span');

// initialize state

// set event listeners to update state and DOM
sumButton.addEventListener('click', () => {
    // - Get the values of the two inputs
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;

    // - Add together the VALUE of the two inputs
    const sum = value1 + value2;

    // - Inject the sum into our sum `span`
    sumSpan.textContent = sum;
});


// import functions and grab DOM elements
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subSpan = document.getElementById('sub-span');

// initialize state

// set event listeners to update state and DOM
subButton.addEventListener('click', () => {
    // - Get the values of the two inputs
    const value1 = subInput1.valueAsNumber;
    const value2 = subInput2.valueAsNumber;

    // - Add together the VALUE of the two inputs
    const sub = value1 - value2;

    // - Inject the sum into our sum `span`
    subSpan.textContent = sub;
});

// import functions and grab DOM elements
const timesInput1 = document.getElementById('times-input-1');
const timesInput2 = document.getElementById('times-input-2');
const timesButton = document.getElementById('times-button');
const timesSpan = document.getElementById('times-span');

// initialize state

// set event listeners to update state and DOM
timesButton.addEventListener('click', () => {
    // - Get the values of the two inputs
    const value1 = timesInput1.valueAsNumber;
    const value2 = timesInput2.valueAsNumber;

    // - Add together the VALUE of the two inputs
    const times = value1 - value2;

    // - Inject the sum into our sum `span`
    timesSpan.textContent = times;
});

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divSpan = document.getElementById('div-span');

// initialize state

// set event listeners to update state and DOM
divButton.addEventListener('click', () => {
    // - Get the values of the two inputs
    const value1 = divInput1.valueAsNumber;
    const value2 = divInput2.valueAsNumber;

    // - Add together the VALUE of the two inputs
    const div = value1 / value2;

    // - Inject the sum into our sum `span`
    divSpan.textContent = div;
});





           