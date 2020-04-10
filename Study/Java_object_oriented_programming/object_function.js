var kim = {name: 'kim', first: 10, second: 20};
var lee = {name: 'lee', first: 10, second: 10};
function sum(prefix){
    return prefix+this.first+this.second;
}
console.log("sum.call(kim)", sum.call(kim, '=> '));
console.log("sum.call(lee)", sum.call(lee, ': '));
//the first parameter set 'this' to 'valuable'.
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());