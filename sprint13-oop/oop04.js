class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} costă ${this.price} lei.`;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    this.items.push(product);
  }

  total() {
    return this.items.reduce((sum, p) => sum + p.price, 0);
  }

  getInfo() {
    let info = "Au fost gasite " + this.items.length + " produse:\n";
    this.items.forEach(function (item) {
        info = info + item.getInfo() + "\n";
    });

    return info;
  }

  displayInfo() {
    console.log(this.getInfo());
  }
}

const cart = new Cart();
const produs1 = new Product("Mouse", 80);
const produs2 = new Product("Tastatură", 150);
const produs3 = new Product("Monitor", 2000);
cart.addProduct(produs1);
cart.addProduct(produs2);
cart.addProduct(produs3);

// console.log(cart.getInfo());
cart.displayInfo();
// Total: 230
console.log("Total:", cart.total());


