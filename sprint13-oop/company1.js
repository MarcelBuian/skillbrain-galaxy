// make() este o functie care retureaza un nou obiect fara clasa
export const make = (name, website) => {
    return {
        // forma scurta este doar:
        // name,
        name: name,
        website: website,
        getName() {
            return this.name;
        },
        getWebsite() {
            return this.website;
        },
        getInfo() {
            return "Name: " + this.name + " website: " + this.website;
        },
    };
};
