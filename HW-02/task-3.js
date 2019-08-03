
let wordQuantity;
function calculateEngravingPrice(message, pricePerWord) {
    wordQuantity = message.split(' ').length;
    return wordQuantity * pricePerWord;
}
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
