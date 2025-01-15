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

 console.log(user.email!)