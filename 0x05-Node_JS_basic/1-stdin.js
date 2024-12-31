process.stdout.write('Welcome to ALX, what is your name?\n');

// Handle the input via stdin (interactive or piped)
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Handle the end of input (when the user ends the input or the stream closes)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
