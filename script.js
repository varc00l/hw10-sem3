document.getElementById('helloBtn').addEventListener('click', () => {
    alert('Hello World!');
});

const randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('checkBtn').addEventListener('click', () => {
    const userGuess = Number(document.getElementById('guessField').value);
    const result = document.getElementById('guessResult');

    if (userGuess === randomNumber) {
        result.textContent = 'Вітаю! Ви вгадали число!';
    } else if (userGuess < randomNumber) {
    result.textContent = 'Загадане число більше';
    } else {
        result.textContent = 'Загадане число менше';
    }
    });

let clickCounter = 0;
    
document.addEventListener('click', () => {
    clickCounter++;
    document.getElementById('clickCount').textContent = clickCounter;
});

const applyCallbackToEachElement = (arr, callback) => {
    const resultArray = [];
    for (const element of arr) {
        resultArray.push(callback(element));
    }
    return resultArray;
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
};

const showDiscountedPrice = (price) => {
    console.log(`Discounted price: ${price}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice); 
