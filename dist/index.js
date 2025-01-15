"use strict";
// Tipos Básicos
let age = 5;
const firtsName = "Mauricio";
const isValid = true;
let idk = 6;
idk = "12";
const ids = [1, 2, 3, 4, 5, 6, 7];
const family = ["Mauricio", "Matheus"];
console.log(age);
// Tupla
const person = ["Mauricio", 19];
// Lista de Tuplas
const people = [["Mauricio", 19], ["Matheus", 16]];
// Intersections
const productId = "1";
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions
const productName = "Boné";
let itemId;
itemId = productName;
itemId = productName;
