function displayPersonKey(person, key) {
    console.log("Proprietatea " + key + " este: " + person[key]);
}

const person = {
    age: 20,
};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person.firstName);
console.log(person["firstName"]);

displayPersonKey(person, "firstName");
displayPersonKey(person, "lastName");
displayPersonKey(person, "age");

const a = {
    "error": false,
    "category": "Pun",
    "type": "twopart",
    "setup": "A Roman walks into a bar and raises 2 fingers and says to the bartender...",
    "delivery": "\"Five beers, please.\"",
    "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
    },
    "safe": true,
    "id": 285,
    "lang": "en"
}


