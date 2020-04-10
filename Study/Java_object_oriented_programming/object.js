var memberArray = ['egoing', 'graphittie', 'leezche'];
var i = 0;
while (i < memberArray.length) {
    console.log(i, memberArray[i]);
    i = i + 1;
}
var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezche'
}
for(var name in memberObject) {
    console.log(name, memberObject[name]);
}