import readline from "readline";
import chalk from "chalk";
import whoami from "./commands/whoami.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: chalk.cyan("BrookeOS >> "),
});

const commands = {
  help: () => {
    console.log(chalk.bold("\nAvailableCommands:\n"));
    console.log("   whoami      About Brooke");
    console.log("   skills      Technology & tools");
    console.log("   currently   Currently learning, reading, listening");
    console.log("   fun         Random facts");
    console.log("   exit        Exit BrookeOS\n");
  },

  whoami: () => {
    whoami();
  },

  //TODO: Finish skills
  skills: () => {},

  //TODO: Finish currently
  currently: () => {},

  //TODO: Finish fun
  fun: () => {},

  exit: () => {
    console.log(chalk.greenBright("\nLogging out... stay curious.\n"));
    rl.close();
  },
};

export async function startCLI() {
  process.stdin.resume();

  rl.prompt();
  rl.on("line", (line) => {
    const input = line.trim().toLowerCase();

    readline.moveCursor(process.stdout, 0, -1);
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);

    if (commands[input]) {
      commands[input]();
    } else {
      console.log(chalk.red(`Unknown command: ${input}. Try 'help'.`));
    }

    rl.prompt();
  }).on("close", () => {
    process.exit(0);
  });
}
