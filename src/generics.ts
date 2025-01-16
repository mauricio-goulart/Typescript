// Generics
const returnValue = <t>(value: t): t => value;

const messag = returnValue<string>("Hello World");

function getFirtsValue<t>(array: t[]){
    return array[0];
}

const array1 = getFirtsValue<string>(["1", "2"]);

