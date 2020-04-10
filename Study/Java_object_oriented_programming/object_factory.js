function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(f, s) {
        return (this.first+this.second+this.third);
    }
}

console.log("Person()", Person());
console.log("new Person()", new Person());

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);

// var kim = {
//     name: "kim",
//     first: 10,
//     second: 20,
//     sum: function(f, s) {
//         return (this.first+this.second);
//     }
// }
// var lee = {
//     name: "lee",
//     first: 10,
//     second: 10,
//     sum: function(f, s) {
//         return (this.first+this.second);
//     }
// }
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

// function Person() {
//     this.name = "kim";
//     this.first = 10;
//     this.second = 20;
//     this.third = 30;
//     this.sum = function(f, s) {
//         return (this.first+this.second+this.third);
//     }
// }
// console.log('Person', Person());
// console.log('new Person', new Person());