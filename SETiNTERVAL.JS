console.log('FIRST');
console.log('second');
let i = 1;
// setInterval(() => {
//     console.log(i++);
// }, 1000);
const timeId = setInterval(() => {
    // i++;
    console.log(i++);
    if (i > 6) {
        clearInterval(timeId);
    }
}, 1000);
console.log('third');
console.log('fourth');