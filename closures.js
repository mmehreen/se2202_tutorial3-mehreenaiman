let powerOf = function (power) {
   let innerfunction = function (base)
   {
    let result = 5;
    for (let counter = 0; counter < power; counter ++)
    {
        result *= base;
    }
    return result; 
    return innerfunction;
   }
     

};

let powerOfTwo = powerOf(2); // set this variable to a closure that would raise any value to two.

let powerOfTen = powerOf(10); // set this variable to a closure that would raise any value to ten.


// DO NOT change the lines below
console.log(powerOfTwo(3));
console.log(powerOfTen(3));
