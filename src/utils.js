import readline from "readline";

readline.emitKeypressEvents(process.stdin);

export async function waitForKeyPress() {
  return new Promise((resolve) => {
    // Save all current stdin listeners (like readline)
    const previousListeners = process.stdin.listeners("data");

    // Temporarily remove them so nothing else reacts to the key press
    previousListeners.forEach((listener) =>
      process.stdin.removeListener("data", listener)
    );

    // Set up a one-time keypress listener
    const onKeyPress = () => {
      process.stdin.pause(); // stop reading input
      process.stdin.removeListener("data", onKeyPress); // clean up

      // Restore readline and others
      previousListeners.forEach((listener) =>
        process.stdin.on("data", listener)
      );

      resolve(); // done waiting
    };

    process.stdin.resume();
    process.stdin.on("data", onKeyPress);
  });
}

export function clearPreviousLines(count = 1) {
  for (let i = 0; i < count; i++) {
    readline.moveCursor(process.stdout, 0, -1);           // Move cursor up one line
    readline.clearLine(process.stdout, 0);                // Clear the entire line
    readline.cursorTo(process.stdout, 0);                 // Move to start of that line
  }
}

export async function typewriter(text, delay = 30) {
  for (let char of text) {
    process.stdout.write(char);
    await new Promise((res) => setTimeout(res, delay));
  }
  process.stdout.write("\n");
}

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
