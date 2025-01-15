// Tipos Básicos
let age: number = 5;
const firtsName: string = "Mauricio";
const isValid: Boolean = true;
let idk: any = 6;

idk = "12";

const ids: number[] = [1,2,3,4,5,6,7];
const family: string[] = ["Mauricio", "Matheus"]

console.log(age);

// Tupla
const person: [string, number] = ["Mauricio", 19];

// Lista de Tuplas
const people: [string, number][] = [["Mauricio", 19], ["Matheus", 16]];

// Intersections
const productId: string | number = "1"; 

// Enum
enum Direction {
    Up = 1, 
    Down = 2,
    Left = "Esquerda"
}

const direction = Direction.Up;

// Type Assertions
const productName: any = "Boné";

let itemId: string; 

itemId = productName as any;
itemId = <string>productName;

