import readline from "readline";
import chalk from "chalk";
import whoami from "./commands/whoami.js";
import mission from "./commands/mission.js";
import skills from "./commands/skills.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: chalk.cyan("BrookeOS >> "),
});

const commands = {
  help: () => {
    console.log(chalk.bold("\nAvailable commands:\n"));
    console.log(`   ${chalk.cyanBright("whoami")}      About Brooke`);
    console.log(`   ${chalk.magentaBright("skills")}      Technology & tools`);
    console.log(
      `   ${chalk.blueBright("mission")}     Values, org types, product focus`
    );
    console.log(
      `   ${chalk.yellowBright(
        "currently"
      )}   Currently learning, reading, listening`
    );
    console.log(`   ${chalk.greenBright("contact")}     Contact information`);
    console.log(`   ${chalk.redBright("exit")}        Exit BrookeOS\n`);
  },

  whoami: async () => {
    whoami();
  },

  //TODO: Finish skills
  skills: () => {
    skills();
  },

  //TODO: Finish mission
  mission: () => {
    mission();
  },

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
      console.log(chalk.red(`Unknown command: ${input}. Try 'help'.\n`));
    }

    rl.prompt();
  }).on("close", () => {
    process.exit(0);
  });
}
