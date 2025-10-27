

// make() este o functie care retureaza un nou obiect cu clasa. 
export const make = (name, website) => {
    
    function Company(name, website) {
        this.name = name;
        this.website = website;
        // Metodele în continuare sunt definite în exterior
        this.getName = function() {
            return this.name;
        };
        this.getWebsite = function() {
            return this.website;
        };
        this.getInfo = function() {
            return "Name: " + this.name + " website: " + this.website;
        };
    }

    return new Company(name, website);
};



