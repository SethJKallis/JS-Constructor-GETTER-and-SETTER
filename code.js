class PersonDetails {
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
// GETTER AND SETTER FOR FIRST NAME
    get userFirstName(){
        return this.firstName;
    }
    set userFirstName(Name){
        return this.firstName = Name;
    }

    // GETTER AND SETTER FOR LAST NAME
    get userLastName(){
        return this.lastName;
    }
    set userLastName(lastName){
        return this.lastName = lastName;
    }

    // GETTER AND SETTER FOR EMAIL
    getUserEmail(){
        return this.email;
    }
    setUserEmail(email){
        this.email = email;
    }

    display(){
        console.log(`Name: ${this.firstName} \nSurname: ${this.lastName}\nEmail: ${this.email}`)
    }
};

let personOne = new PersonDetails("Seth", "Kallis", "email@gmail.com");
console.table(personOne);

personOne.userFirstName = "Jack";
console.warn(personOne.userFirstName)
console.error(personOne.firstName);

console.log('')

personOne.userLastName = "Sparrow";
console.warn(personOne.userLastName);
console.error(personOne.lastName);

console.log('')

personOne.setUserEmail("AnotherEmail@gmail.com");
console.warn(personOne.getUserEmail())
console.error(personOne.email);

console.log('')

personOne.display()