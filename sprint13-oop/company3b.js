// Fiecare clasă ar trebui să fie în propriul fișier
// În mod ideal, dacă numele clasei este același cu numele fișierului, se face distincția între majuscule și minuscule
class Company { // numele clasei - e denumirea funcției constructor
    // metodata cu numele constructor corespunde funcției-constructor
    // se apelează atunci când creăm new Company(name, email)
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Această proprietate getName are în interior o funcție obișnuită
    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }
}

// Din punct de vedere funcțional nimic nu s-a schimbat
const company = new Company('SkillBrain', 'support@skillbrain.com'); // se apelează metoda constructor
console.log(company.getName()); // => "SkillBrain"
