const form = document.querySelector("form");
//console.log(form);
form.addEventListener('submit', (event) => {
    // The event.preventDefault() method is used to stop the default action of an HTML element from happening. 
    //In the context of your BMI calculator project, it is preventing the default form submission behavior when the "Calculate" button is clicked.
    event.preventDefault(); // This will not send the value of input field to server. Will stop those value.
    console.log(event);

    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector("#results");
    result.style.color = "blue";

    const resultGuid = document.querySelector("#results-guide");
    resultGuid.style.color = "blue";

    let bmi; // Declare bmi outside of the else block
    if(height === '' || height < 0 || isNaN(height)){ // isNaN evaluate to true if height is not a number.
        result.innerHTML = `${height} is not valid height. Enter valid height.`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `${weight} is not valid height. Enter valid height.`
    }
    else {
        // BMI = weight in kilograms / height in meters squared
        // BMI = 70Kg/(1.7m)^2
        // const bmi = (weight/ ((height * height)/10000)).toFixed(2); // The bmi variable is declared inside the else block, so it's not accessible outside of that block. 
        bmi = (weight/ ((height * height)/10000)).toFixed(2);
        result.innerHTML = `<span><bold>BMI: ${bmi}</bold></span>`
    }

    if(bmi < 18.6){
        resultGuid.innerHTML = '<bold>Your BMI indicates you are underweight.</bold>'
    } else if(bmi > 24.9){
        resultGuid.innerHTML = '<bold>Your BMI suggests you are overweight.</bold>'
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        resultGuid.innerHTML = '<bold>Congratulations! Your BMI is within the normal range.</bold>'
    }
});