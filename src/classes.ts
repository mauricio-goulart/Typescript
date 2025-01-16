// Classes
class Person {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    };

    myName(): string {
        return this.name;
    };
};

const perso = new Person(1, "Mauricio", 19)

class Exployee extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age);   
    }
    
    whoAmI() {
        return this.name
    }
}