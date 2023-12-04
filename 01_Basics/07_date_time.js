let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})


// Creating a new Date object
let currentDate = new Date();

// Getting various components of the date
let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // Month is zero-based (0-11)
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let milliseconds = currentDate.getMilliseconds();
let dayOfWeek = currentDate.getDay(); // Day of the week (0-6, where 0 is Sunday)

// Getting the current timestamp
let timestamp = currentDate.getTime();

// Formatting the date as a string
let dateString = currentDate.toDateString();
let timeString = currentDate.toTimeString();
let dateTimeString = currentDate.toLocaleString();

// Adding or subtracting time
currentDate.setHours(hours + 1); // Add 1 hour

// Displaying the results
console.log("Year:", year);
console.log("Month:", month + 1); // Adding 1 to convert zero-based month to the human-readable format (1-12)
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);
console.log("Day of the Week:", dayOfWeek);
console.log("Timestamp:", timestamp);
console.log("Date String:", dateString);
console.log("Time String:", timeString);
console.log("Date and Time String:", dateTimeString);

// Displaying the modified date after adding 1 hour
console.log("Modified Date (added 1 hour):", currentDate);


