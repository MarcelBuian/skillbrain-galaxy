console.log("Hello, Sprint8");

const exp_bool = true;

if (exp_bool) {
    console.log("Am intrat pe ramura if");
} else {
    console.log("Am intrat pe ramura else")
}

// Infinite loop (press "ctrl + c" to cancel in terminal)
// while (exp_bool) {
//     console.log("Am intrat pe ramura while");
// }

let i = 0;
while(i < 10) {
    // i = i + 1;
    i++;
    console.log("Suntem in instructiunea while cu numarul "+ i);
}

let j = 0;
do {
    j++;
    console.log("Suntem in instructiunea do/while cu numarul "+ j);
} while(j < 10);

console.log("Programul a finisat!");