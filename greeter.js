function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane one", lastName: "User kohungchin" };
document.body.innerHTML = greeter(user);
