import { pastel, morning } from "gradient-string";
import chalk from "chalk";
import ora from "ora";
import { typewriter } from "../utils.js";

export default function intro() {
  const hello = pastel("HELLO! I'M BROOKE 🤓");
  const role = morning("Senior Software Engineer");
  const location = morning("Louisville, KY");

  // prettier-ignore
  console.log(`
             ________________________________________________
            /                                                \\
           |    _________________________________________     |
           |   |                                         |    |
           |   |  C:\\> _ echo $greeting                  |    |
           |   |  ${hello}                   |    |
           |   |  C:\\> _ echo $role                      |    |
           |   |  ${role}               |    |
           |   |  C:\\> _ echo $location                  |    |
           |   |  ${location}                         |    |
           |   |                                         |    |
           |   |  Press any key to learn                 |    |
           |   |  more about me!                         |    |
           |   |                                         |    |
           |   |_________________________________________|    |
           |                                                  |
           \\_________________________________________________/
                   \\___________________________________/
                ___________________________________________
             _-\'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- \`-_
          _-\'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.\`-_
       _-\'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\`__\`. .-.-.-.\`-_
    _-\'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.\`-_
 _-\'.-.-.-.-.-. .---.-. .-------------------------. .-.---. .---.-.-.-.\`-_
:-------------------------------------------------------------------------:
\`---._.-------------------------------------------------------------._.---\'`);
}

export async function boot() {
  await typewriter(chalk.bgGreenBright(">> Initializing BrookeOS v1.0\n"));

  const bootSteps = [
    {
      text: "Detecting emotional baseline…",
      success: "Anxiety: calibrated (and thriving)",
    },
    {
      text: "Running body temperature diagnostics…",
      success: "Status: physically freezing",
    },
    {
      text: "Scanning for nearby feline units…",
      success: "Cats: located and cuddled",
    },
    {
      text: "Initializing internet sleuth mode...",
      success: "Dots: connected",
    },
  ];

  for (const [index, step] of bootSteps.entries()) {
    if (index !== 0) await new Promise((res) => setTimeout(res, 1300));
    const spinner = ora(step.text).start();
    await new Promise((res) => setTimeout(res, 3000));
    spinner.succeed(chalk.cyan(step.success));
  }

  await typewriter(
    chalk.greenBright(
      "\n>> All systems online. Proceed with curiosity.\n\n>> Type 'help' to get started."
    )
  );

  console.log("");
}
