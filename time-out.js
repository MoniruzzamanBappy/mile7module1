function doSomeThing() {
    console.log('hello There!');
}

console.log('first');
console.log('second');
console.log('third');
// setTimeout(doSomeThing, 5000);
setTimeout(() => {
    console.log('custome code :)');
}, 5000);
setTimeout(function () {
    console.log('here is 3000');
}, 3000)
console.log('fourth');
console.log('fifth');
