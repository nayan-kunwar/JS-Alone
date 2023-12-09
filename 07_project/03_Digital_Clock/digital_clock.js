// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock');
//setInterval() is a method in JavaScript that allows you to repeatedly execute a function or code snippet at specified intervals. 
//It takes two arguments: the function to be executed and the interval (in milliseconds) at which the function should be called.
// setInterval(function, interval);

setInterval(()=> { 
let date = new Date();
//console.log(date.toLocaleTimeString());
clock.innerHTML= `${date.toLocaleTimeString()}`;
clock.style.color = 'black';
}, 1000);