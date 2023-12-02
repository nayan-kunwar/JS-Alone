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

{
    // *********************** Operations ***********************

    let value = 3
    let negValue = -value
    // console.log(negValue);

    // console.log(2+2);
    // console.log(2-2);
    // console.log(2*2);
    // console.log(2**3);
    // console.log(2/3);
    // console.log(2%3);

    let str1 = "hello"
    let str2 = " aman"

    let str3 = str1 + str2
    console.log(str3);

    // console.log("1" + 2);
    // console.log(1 + "2");
    // console.log("1" + 2 + 2); // 122=> string
    // console.log(1 + 2 + "2"); // 32=> string | first 1+2 calculated

    // console.log( (3 + 4) * 5 % 3);

    //In the context of the unary plus operator (+), it is used for numeric [coercion], converting a [value] to a [number].
    // console.log(+true); // Output: 1 [value] to a [number].
    console.log(+""); // Output: 0 [value] to a [number].

    let num1, num2, num3

    num1 = num2 = num3 = 2 + 2

    //Postfix and prefix operators

    //Postfix: The postfix increment operator (x++) increments the value of x after its current value is used. [Value come different 5 6]
    let x = 5;
    let y = x++; // [Phle value used karo fir, increment karo]

    console.log(x); // Output: 6 (value of x is incremented after being assigned to y)
    console.log(y); // Output: 5 (original value of x)

    //Prefix: The prefix increment operator (++x) increments the value of x before its current value is used. [Value come same 6 6]
    let x2 = 5;
    let y2 = ++x; // [Phle increment karo fir, used karo]

    console.log(x2); // Output: 6 (value of x1 is incremented before being assigned to y2)
    console.log(y2); // Output: 6 (new value of x1)


}