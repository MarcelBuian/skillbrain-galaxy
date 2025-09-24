
// Copierea unui obiect (sau lista) in javascript se intampla doar pe primul nivel!

const a = {
    "error": false,
    "delivery": "\"Five beers, please.\"",
    "flags": {
        "nsfw": false,
        "explicit": false
    },
    "id": 285,
    "lang": "en"
}

const b = {...a};
b.flags = {...a.flags};

b.delivery = "Right now!";
b.flags.nsfw = true;

console.log(a,b);

