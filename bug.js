function foo(a,b){    if (a === 0 || b === 0) {        return 0;    }    return a/b;}

console.log(foo(0,0)); //This will return 0. But if we want to handle the error when both values are 0 it won't work
console.log(foo(1,0)); //This will return Infinity, this is also a problem