const body = document.querySelector("body");
console.log(body);

const buttons = document.querySelectorAll(".button");
console.log(buttons);

buttons.forEach( (button) => {
    // addEventListener -> whenever we click this event will listen click event, and function will perform what will happen when click on button
    button.addEventListener('click', function (event){
        console.log(event); 
        console.log(event.target); //This will give from which even(click event) is coming
        if (event.target.id==="red"){
            body.style.backgroundColor = event.target.id; //This will gove id of who raise the event.
        }
        else if(event.target.id==="grey"){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id==="white"){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id==="blue"){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id==="yellow"){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id==="purple"){
            body.style.backgroundColor = event.target.id;
        }
    });
});