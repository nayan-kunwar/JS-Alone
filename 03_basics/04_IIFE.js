// Immediately invoked function[IIFE]
// Syntax: ()(arguments);

//Named Function
(function name(){
    console.log(`Say my name.`);
})();

//
(function(){
    console.log(`Say my name again.`);
})();

//Arrow function
( () => {
    console.log(`Say my name again and again.`);
})();


//Passing arguments in IIFE
(function rolex(dialog){
    console.log(`Rolex: ${dialog}`);
})("Sir, Just Sir");
