// Prin atribuire
const company = {
    name: 'SkillBrain',
    // this nu poate fi folosit in functiile de tip arrow (sageata)
    getName() {
        return this.name;
    },
    // Folosim metoda scurta a unei functii clasice
    // setName: function (newName) {
    setName(newName) {
        this.name = newName;
    }
};

console.log(company.getName());

company.setName("Google");

console.log(company.getName());
    