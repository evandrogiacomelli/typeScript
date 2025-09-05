export interface ProductInterface {
    getName(): string;
    getPrice(): number;
    setPrice(price: number): void;
    calculatePriceWithDiscount(): number;
    setDiscount(discount: number): void;
    getPriceWithDiscount(): number;
    setOffer(offer: boolean): void;
    getOffer(): boolean;
}