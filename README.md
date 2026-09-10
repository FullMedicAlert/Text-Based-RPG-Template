log.output(content: String, color: String);
  Outputs a new log, accepting string content. Optionally, any valid css color can be provided in a second parameter, otherwise defaults to white.
log.clear();
  Clears all logs

handleInput(input: String);
  Called whenever the user presses "Enter: while focused on the text input element, the "input" argument is simply the current text content of the element.
