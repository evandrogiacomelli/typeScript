

class Product {

    constructor(name, price, discount) {
        this.name = name,
        this.price = price,
        this.discount = discount;
        this.offer = false;
        this.priceWithDiscount = this.calculatePriceWithDiscount();
    }

    getName() {
        return this.name;
    }

    setPrice(price) {
        this.price = price;
        this.priceWithDiscount = this.calculatePriceWithDiscount();
    }

    getPrice() {
        return this.price;
    }

    calculatePriceWithDiscount() {
        return this.price - (this.price * (this.discount / 100));
    }

    setDiscount(discount) {
        this.discount = discount;
        this.priceWithDiscount = this.calculatePriceWithDiscount();
    }

    getPriceWithDiscount() {
        return this.priceWithDiscount;
    }

    setOffer(offer) {
        this.offer = offer;
    }

    getOffer() {
        return this.offer;
    }
}

module.exports = { Product };
