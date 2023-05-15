// II.01. We save the two class to a variable, what we have:
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// II.02. We're going to initialize a value here called "load":
// NOTE:  
let load = 0;

// II.04. We have to set an interval:
// NOTE: We're passing in the blurring function, and then we set time (comes in milliseconds) 
let int = setInterval(blurring, 30);

// II.03. We create a funciton for blurring:
function blurring () {
    // NOTE: Here we want to take the load value, and increment it by one
    load++;
    // II.05. We create a boolean here:
    // NOTE: If the load value is greater than 99, then we stop the interval with "clearInterval()" function, and we have to pass in "int"
    if (load > 99) {
        // NOTE: We can test it in the console, if it stops by 100  
        clearInterval(int); 
    }
    // II.06. If it has reached 100, then we want to change the text:
    // NOTE: We change the innertext value, and make it equal to "load"
    loadText.innerText = `${load}%`;
    // II.08. Adding scale function: (NOTE: We pass in load (which is the "num"), and the numbers from load + opacity numbers)
    // NOTE: Keep it in mind that we go the other way around with the opacity number, so it has to disappear which is 0 in our case 
    // II.07. After we're gonna make sure that it fades out: (NOTE: After it loaded to a 100)
    // NOTE: Keep it mind, that opacity goes from 0 to 1
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // II.09. We have to do the same thing for blur: (NOTE: by using scale function on filter)
    // NOTE: It seems fucked up, but technically this is how we can call the method and changing it from 30 to 0 with the load time
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    // Testing:
    // console.log(load); 
}

// II.08. We're going to use a function that changes the load value to one that fits opacity value
// NOTE: This is coming from stackoverflow, and maps the numbers
// AFTER: We're calling the function for opacity above (II.08.)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



