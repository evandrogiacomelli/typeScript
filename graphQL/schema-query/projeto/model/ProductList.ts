import { Product } from "./impl/Product";

export class ProductList {
    private listName: string;
    private list: Product[];

    constructor(listName: string) {
        this.listName = listName;
        this.list = [];
    }

    addProduct(product: Product): void {
        if (product instanceof Product) {
            this.list.push(product);
        }
        else {
            throw new Error("Only Products can be added to ProductList. ");
        }
    }

    getProducts(): Product[] {
        return this.list;
    }

    getListName(): string {
        return this.listName;
    }
}