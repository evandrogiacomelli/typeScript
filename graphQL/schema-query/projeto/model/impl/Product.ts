import { ProductInterface } from '../interfaces/Product';

export class Product implements ProductInterface {
    private name: string;
    private price: number;
    private discount: number;
    private offer: boolean;
    private priceWithDiscount: number;

    constructor(name: string, price: number, discount: number) {
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.offer = false;
        this.priceWithDiscount = this.calculatePriceWithDiscount();
    }

    getName(): string {
        return this.name;
    }

    setPrice(price: number): void {
        this.price = price;
        this.priceWithDiscount = this.calculatePriceWithDiscount();
    }

    getPrice(): number {
        return this.price;
    }

    calculatePriceWithDiscount(): number {
        return this.price - (this.price * (this.discount / 100));
    }

    setDiscount(discount: number): void {
        this.discount = discount;
        this.priceWithDiscount = this.calculatePriceWithDiscount();
    }

    getPriceWithDiscount(): number {
        return this.priceWithDiscount;
    }

    setOffer(offer: boolean): void {
        this.offer = offer;
    }

    getOffer(): boolean {
        return this.offer;
    }
}