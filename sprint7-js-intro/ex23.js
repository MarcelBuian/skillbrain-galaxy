// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

const getNameOfMonthIndex = (monthIndex) => {
    let name;

    switch (monthIndex) {
        case 1:
            name = "Ianurie";
            break;
        case 2:
            name = "Februarie";
            break;
        case 3:
            name = "Martie";
            break;
        case 4:
            name = "Aprilie";
            break;
        case 5:
            name = "Mai";
            break;
        case 6:
            name = "Iunie";
            break;
        case 7:
            name = "Iulie";
            break;
        case 8:
            name = "August";
            break;
        case 9:
            name = "Sep";
            break;
        case 10:
            name = "Oct";
            break;
        case 11:
            name = "Nov";
            break;
        case 12:
            name = "Dec";
            break;
        default: throw "Invalid month index";
    }

    return name;
}


const a = 4;
console.log("a = " + a);
console.log("a este luna = " + getNameOfMonthIndex(a));

const b = 11;
console.log("b = " + b);
console.log("b este luna = " + getNameOfMonthIndex(b));

const c = 16;
console.log("c = " + c);
console.log("c este luna = " + getNameOfMonthIndex(c));