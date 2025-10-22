const numbers1 = [1, 3, -55];
    
// Din momentul ăn care acest cod este executat, toate listele
// inclusiv cele existente, vor avea si metoda last
Array.prototype.last = function last() {
    return this[this.length - 1];
}

console.log(numbers1.last());


const number1 = new Number(1);
const number2 = 1;

console.log(number1 + number2);