function getFixedString(s, charLength) {
    if (s.length >= charLength) {
        return s;
    } else {
        const newS = '_' + s;

        return getFixedString(newS, charLength)
    }
}


const sirOriginal = "Denisa";
const sirFixat = getFixedString(sirOriginal, 10);

console.log(sirFixat);