function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function() {
    return (this.first+this.second+this.third);
}

var kim = new Person('kim', 10, 20, 30);
console.log(kim);
console.log(Person);
// apply specific function to variable individually
kim.sum = function() {
    return (this.first+this.second);
}
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());