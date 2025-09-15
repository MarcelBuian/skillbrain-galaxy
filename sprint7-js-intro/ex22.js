const getAbs1 = (num) => {
    if (num >= 0) {
        return num;
    } else {
        return -num;
    }
}

const getAbs2 = (num) => num >= 0 ? num : -num;

const result1 = getAbs1(-6);
const result2 = getAbs2(-6);
const result3 = getAbs1(7);
const result4 = getAbs2(7);

console.log(result1, result2);
console.log(result3, result4);