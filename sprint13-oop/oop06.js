const printer = {
    name: 'SkillBrain',
    print(greeting = 'hello') {
        console.log(`${greeting}, ${this.name}`);
    }
};

printer.print("Hi");

// Pentru ca functia print a fost transmisa in afara obiectului printer, se pierde contextul lui this.
setTimeout(printer.print, 1000);

// Metoda 1: In acest caz functia print va fi apelata intr-o secunda din obiectul printer.
setTimeout(() => printer.print(), 1000);

// Metoda 2:
// Functia .bind se apealaza la o functie existenta pentru a transmite contextul
//  (obiectul de unde a fost zmulsa functia) - asta pentru ca exista cuvantul "this" in aceasta functie
setTimeout(printer.print.bind(printer), 1000);

// Metoda 3:
// Apply e un fel de bind, dar are si un al doilea parametru (o lista)
setTimeout(() => printer.print.apply(printer, ['hi']), 1000);
// setTimeout(() => printer.print("hi"), 1000);

setTimeout(() => printer.print.call(printer, 'salut'), 1000);

