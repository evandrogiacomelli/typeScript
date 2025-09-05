
class MegaSena {
    
    constructor() {
        this.numbers = this.generateNumbers();
    }

    generateNumbers() {
        const nums = (a, b) => a - b;
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(nums)
    }

    getNumbers() {
        return this.generateNumbers();
    }
}

module.exports = { MegaSena }