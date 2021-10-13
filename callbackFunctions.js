let even_predicat = function (value)
{
    if (value%2==0)
    return true; 
    else return false;
};

let odd_predicat = function (value)
{
    if (value%2==0)
    return false; 
    else return true;
};

let undefined_predicate = function (value)
{
    if (value === undefined)
    return true; 
    else return false; 

};

let null_predicate = function (value)
{
    if (value === null)
    return true;
    else return false;
    
};


//We're defining a function that takes predicate function to 'callback' 
// and a value to check using the given predicate//
let check = function (predicat,value)
{
    return predicat(value);
};


// fix notes in the repo.
console.log(even_predicat(9));
console.log(odd_predicat(9));
console.log(even_predicat(8));
console.log(odd_predicat(8));
let x;
console.log(check(undefined_predicate,x));
console.log(check(null_predicate,x));
