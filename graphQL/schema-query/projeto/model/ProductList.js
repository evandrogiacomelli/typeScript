const { Product } = require("./Product");

class ProductList {

    constructor(listName) {
        this.listName = listName;
        this.list = [];
    }

    addProduct(product) {
        if (product instanceof Product) {
            this.list.push(product);
        }
        else {
            throw new Error("Only Products can be added to ProductList. ");
        }
    }

    getProducts() {
        return this.list;
    }
}

module.exports = { ProductList };