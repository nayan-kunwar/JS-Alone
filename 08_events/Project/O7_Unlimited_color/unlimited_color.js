//Generate random color
//The expression Math.floor(Math.random() * 16) will generate a random 
//integer between 0 (inclusive) and 16 (exclusive), effectively ranging 
//from 0 to 15.
//Math.random() * 16: scales the random number to the range of 0 to 15.999... (16 exclusive).
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervaId; // undefined
  const startChangingColor = function(){
    if(!intervaId){ // undefined and null both are false.
            intervalId = setInterval(()=>{
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
  };

  const stopChangingColor = function(){
    clearInterval(intervalId);
    intervaId = null; // flush out intervalId
  };

  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);