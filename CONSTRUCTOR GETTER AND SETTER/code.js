function PersonDetails(firstName, lastName, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    // GETTER AND SETTER FOR FIRST NAME
    this.getFirstName = () => {
        return this.firstName
    }
    this.setFirstName = (userFirstName) => {
        return this.firstName = userFirstName
    }

    // GETTER AND SETTER FOR LAST NAME
    this.getLastName = () => {
        return this.lastName;
    }
    this.setLastName = (lastName) => {
        return this.lastName = lastName;
    }

    // GETTER AND SETTER FOR EMAIL
    this.getEmail = () => {
        return this.email
    }
    this.setEmail = (email) => {
        this.email = email;
    }

    this.display = () => {
        console.log(`Name: ${this.getFirstName()}\nSurname: ${this.getLastName()}\nEmail Address: ${this.getEmail}`)
    }
};

let personTwo = new PersonDetails("Seth", "Kallis", "email@gmail.com")
console.table(personTwo);

personTwo.setFirstName("Jack");
// console.log(personTwo.getFirstName());

personTwo.setLastName("Sparrow");
// console.log(personTwo.getLastName());

personTwo.setEmail("OtherEmail@gmail.com");
// console.log(personTwo.getEmail());

console.table(personTwo);