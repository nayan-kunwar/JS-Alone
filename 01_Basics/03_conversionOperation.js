let num = 26;
console.log(num);

let num2 = "26";
console.log(num2);

let inNumber = Number(num2);
console.log(typeof inNumber);
console.log(inNumber);

{
    let num2 = "26nk"
    let inNumber = Number(num2);
    console.log(typeof inNumber); // After conversion type will be a number
    console.log(inNumber); //in tutorial giving [NaN]- Not a number   
}

{
    let isNull = null;
    let inNumber1 = Number(isNull);
    console.log(inNumber1); // After conversion [value -> 0] but type will be number
    console.log(typeof inNumber1);

    let isUndefined = undefined;
    let inNumber2 = Number(isUndefined);
    console.log(inNumber2); // After conversion [value -> NaN] 
    console.log(typeof inNumber2); // but type will be number

    //After conversion to [number] value will be
    // "33" => 33
    // null => 0
    //  true => 1; false => 0
    // "33abc" => NaN
    // "nky" => NaN
    // undefined => NaN | But Type  is [number]
}

{
    let isLoggedIn = "aman"
    let booleanIsLoggedIn = Boolean(isLoggedIn) // "aman" convert to => [true] and type =>  of [true] is [boolean]
    console.log(booleanIsLoggedIn);
    console.log(typeof booleanIsLoggedIn);
    // 1 => true; 0 => false | Type => boolean
    // "" => false
    // "aman" => true
}

{
    let someNumber = 33
    let stringNumber = String(someNumber) // someNumber(33) convert to => "33" string
    console.log(stringNumber);
    console.log(typeof stringNumber); // type of "33" is string
    }
