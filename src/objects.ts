// Type
type Works = {
    location: string;
    function: string;
}

type User = {
    firstName: string;
    age: number | string;
    email?: string;
    password?: string;
    work: Works[]
};

const user: User = {
    firstName: "Mauricio",
    age: 20,
    password: "1234",
    work: [{function: "Dev", location: "Brazil"}, {function: "Dev2", location: "Brazil"}]
 };

console.log(user.email!);

 // Unions
type Author = {
    books: string[];
 };

const author: Author & User = {
    firstName: "Mauricio",
    age: 19,
    work: [{function: "dev", location: "Brazil"}],
    books: ["The Witcher"]
 };

 // Interfaces

interface UserInterface {
    readonly firstName: string;
    email: string;
 };

const emailUser: UserInterface = {
    email: "mauricio@gmail.com",
    firstName: "Mm"
 };

emailUser.email = "2";
//emailUser.firstName = "mm" - erro readonly

// Interface em Função
interface mathFun {
    (x: number, y: number): number;
};

const sumNum: mathFun =(x: number, y: number): number =>{
    return x + y;
};



