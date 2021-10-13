
let user = {

    Name: 'User',
    lastName: 'Admin',
    Age: 26,
    Sex: 'man',
    userFullName() {
        return `${this.Name} ${this.lastName}`
    },

}

function showAge() {
return this.Age;
}

function showFullName(Name, lastName) {
    this.Name = Name;
    this.lastName = lastName;
    return this.userFullName();
}

// console.log(showAge());

// console.log(showAge.bind(user)());

console.log(showFullName.bind(user, 'User', 'Admin')());
console.log(showFullName.call(user, 'User', 'Admin'));



