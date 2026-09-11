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

function formatLog(string) {
    let tokens = string.split(" ");

    let log = document.createElement("div");
    log.classList.add("log");

    let formattedText = "";

    for (let token of tokens) {
        if (token.includes("\\")) {
            let text = token.split("\\")[0];
            let color = token.split("\\")[1];
            console.log(color);
            if (color.includes("!")) {
                log.style.color = color.slice(0, color.length-1);
            } else {
                token = `<span style="color: ${color};">${text}</span>`;
            }
        }
        if (token.includes("\\")) {
            let text = token.split("\\")[0];
            let color = token.split("\\")[1];
            console.log(text);

            token = text;
        }
        formattedText += ( (tokens.indexOf(token) === 0) ? "" : " ") + token;
    }

    log.innerHTML = formattedText;

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
    output: (content) => {
        OUTPUT_EL.appendChild(formatLog(content)); 
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
    // V Example V, replace with game code.

    if (input.includes("/clear")) log.clear(); // Clear log by entering /clear
    else log.output(input); // Otherwise just parrot back the text.
}

// Output Examples...
log.output("Test0")
log.output("Test1\\lime\\ is Green\\green\\")
log.output("Test2")
log.output("Test3\\yellow\\ shines golden")
log.output("Test4\\red\\ is red with anger!")
log.output("Test5's whole line is blue! \\blue!\\")
log.output("Test\\red\\ 6\\orange\\ is\\yellow\\ a\\green\\ rain\\blue\\ bow\\violet\\ !!\\purple\\") //should be able to switch colors without space
log.output("");
log.output('Hint: Try typing "/clear" \\green!\\') 