var superObj = {superVal:'super'}
// var subObj = {subVal: 'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);
console.log('subObj.superVal =>', subObj.superVal);

kim = {
    name: 'kim',
    first: 10, second: 20,
    sum: function(){return this.first+this.second}
}
console.log('kim.sum()', kim.sum());
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
console.log('lee.sum()', lee.sum());