class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
    fullName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.fullName;
}

let user = new Student("Johan", "W.", "Eken");

document.body.innerHTML = greeter(user);