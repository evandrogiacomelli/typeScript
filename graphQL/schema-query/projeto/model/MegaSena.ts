export class MegaSena {
    constructor() {
    }

    generateNumbers(): number[] {
        const nums = (a: number, b: number): number => a - b;
        return Array(6).fill(0)
            .map(() => Math.floor(Math.random() * 60 + 1))
            .sort(nums);
    }

    getNumbers(): number[] {
        return this.generateNumbers();
    }
}