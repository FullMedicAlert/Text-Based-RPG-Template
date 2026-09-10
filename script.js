// Assign input and output elements to variables
const INPUT_EL = document.getElementById("text-input");
const OUTPUT_EL = document.getElementById("text-output");

// Helper function for creatings logs
function constructLogEl(text, color) {
    let log = document.createElement('div');
    log.classList.add('log');
    log.style.color = color;
    log.innerText = text;
    return log;
}

let log = {
    // Max amount of old logs
    MAX: 20,

    // Removes the oldest log
    wrap: () => {
        OUTPUT_EL.firstChild.remove();
    },

    // Outputs a new log, accepting string content
    // Optionally, any valid css color can be provided. Defaults to white.
    output: (content, color = "white") => {
        OUTPUT_EL.appendChild(constructLogEl(content, color)); 
        if (OUTPUT_EL.children.length > log.MAX) log.wrap();
    },

    // Clears all logs
    clear: () => {
        OUTPUT_EL.innerHTML = ""; 
    },
}

// Add an event listener to our input element which calls the handleInput function with the current text when enter is pressed, then clears it.
INPUT_EL.addEventListener('keydown', (e)=>{
    if (e.key === "Enter") {
        e.preventDefault();
        handleInput(INPUT_EL.innerText);
        INPUT_EL.innerText = "";
    } 
});



/* 
 * WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V 
 * WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V 
 * WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V 
 * WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V WRITE CODE DOWN HERE V V V V 
 */

// Initialize any variables you need...



// Then define any functions you write...


// And make sure to handle user input!!!!!!!!!!!
function handleInput(input) {
    log.output(input); // Example, replace with game code.
}

// Output Examples...
log.output("Test1")
log.output("Test2", "green")
log.output("Test3")
log.output("Test4", "yellow")
log.output("Test5", "red")
log.output("Test6")