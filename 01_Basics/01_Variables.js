// 1 - Variables
const accountId = 101;
let accountEmail = "nayan@gmail.com";
var accountPassword = 123;
accountCity = "Dehradun";
let test;

//accountId = 102; error cannot change

accountEmail = "nk@gmail.com";
accountPassword = 321;
accountCity = "Rudraprayag";
/*
Not use var. Because of issue in block scope and functional scope.
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, test]);
