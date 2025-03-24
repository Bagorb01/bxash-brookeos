import readline from "readline";
import chalk from "chalk";
import { clearPreviousLines, typewriter } from "../utils.js";
import whoami from "./commands/whoami.js";
import mission from "./commands/mission.js";
import skills from "./commands/skills.js";
import currently from "./commands/currently.js";
import contact from "./commands/contact.js";

let rl;

// prettier-ignore
const commandText = `
  ${chalk.bold("\nAvailable commands:\n")}
    ${chalk.cyanBright("whoami")}        About Brooke
    ${chalk.magentaBright("skills")}        Technology & tools
    ${chalk.blueBright("mission")}       Values, org types, product focus
    ${chalk.yellowBright("currently")}     Currently learning, reading, listening
    ${chalk.greenBright("contact")}       Contact information
    ${chalk.redBright("exit")}          Exit BrookeOS
`

const commands = {
  help: () => {
    console.log(commandText);
  },

  whoami: async () => {
    await whoami();
  },

  skills: async () => {
    await skills();
  },

  mission: async () => {
    await mission();
  },

  currently: async () => {
    rl.close();               // Close readline to prevent resize issues
    process.stdin.resume(); 
    await currently();
    startCLI()
  },

  contact: async () => {
    await contact()
  },

  exit: async () => {
    await typewriter(chalk.bgGreenBright("\n>> Logging out... stay curious.\n"));
    rl.close();
  },
};

function createCLI() {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: chalk.cyan("BrookeOS >> "),
  });
}

export async function startCLI() {
  createCLI()

  process.stdin.resume();

  setTimeout(() => {
    rl.prompt();
  }, 1000);

  rl.on("line", async (line) => {
    const input = line.trim().toLowerCase();

    clearPreviousLines(1);

    if (commands[input]) {
      await commands[input]();
      setTimeout(() => {
        rl.prompt();
      }, 1000);
    } else {
      console.log(chalk.red(`Unknown command: ${input}. Try 'help'.\n`));
      setTimeout(() => {
        rl.prompt();
      }, 1000);
    }
  }).on("close", () => {
  });
}
