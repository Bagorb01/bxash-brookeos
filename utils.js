import readline from "readline";

readline.emitKeypressEvents(process.stdin);

export async function waitForKeyPress() {
  return new Promise((resolve) => {
    process.stdin.once("keypress", (key) => {
      process.stdin.pause();
      resolve(key);
    });
  });
}

export async function typewriter(text, delay = 30) {
  for (let char of text) {
    process.stdout.write(char)
    await new Promise(res => setTimeout(res, delay))
  }
  process.stdout.write('\n')
}
                                                              