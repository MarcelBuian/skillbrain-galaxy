function Company(name, email) {
  this.name = name;
  this.email = email;
};
    
Company.prototype.getName = function getName() {
  return this.name;
}

Company.prototype.getEmail = function getEmail() {
  return this.email;
}

Company.prototype.setEmail = function setEmail(email) {
  this.email = email;
}
    
const company = new Company('SkillBrain');
console.log(company.getName()); // => "SkillBrain"