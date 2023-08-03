function extractNameAndStreet({ name, address }) {
    return { name, address };
}

const person = {
    name: "prithwi singh",
    age: 21,
    address: {
        street: "Barthara khurd chandauli 232104",
        city: "chandauli",
        state: "Uttar Pradesh"
    }
};

const { name, address } = extractNameAndStreet(person);
console.log(name);  
console.log(address);

