import { UserInterface } from '../interfaces/User';

export class User implements UserInterface {
    id: number;
    name: string;
    email: string;
    age?: number;
    salary?: number;
    vip: boolean;

    constructor(id: number, name: string, email: string, age?: number, salary?: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.salary = salary;
        this.vip = false;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getAge(): number | undefined {
        return this.age;
    }

    setAge(age: number): void {
        this.age = age;
    }

    getSalary(): number | undefined {
        return this.salary;
    }

    setSalary(salary: number): void {
        this.salary = salary;
    }

    getVip(): boolean {
        return this.vip;
    }

    setVip(vip: boolean): void {
        this.vip = vip;
    }
}