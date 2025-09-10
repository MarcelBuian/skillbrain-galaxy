const adev = true;
const fals = false;

console.log(adev + " && " + fals + " =", adev && fals);
console.log(fals + " && " + adev + " =", fals && adev);
console.log(adev + " && " + adev + " =",  adev && adev);
console.log(fals + " && " + fals + " =", fals && fals);

console.log();

console.log(adev + " || " + fals + " =", adev || fals);
console.log(fals + " || " + adev + " =", fals || adev);
console.log(adev + " || " + adev + " =",  adev || adev);
console.log(fals + " || " + fals + " =", fals || fals);

console.log();

console.log("!false=", !fals);
console.log("!true=", !adev);

