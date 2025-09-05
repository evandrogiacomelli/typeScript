export interface UserInterface {
    getId(): number;
    getName(): string;
    setName(name: string): void;
    getEmail(): string;
    setEmail(email: string): void;
    getAge(): number | undefined;
    setAge(age: number): void;
    getSalary(): number | undefined;
    setSalary(salary: number): void;
    getVip(): boolean;
    setVip(vip: boolean): void;
}
