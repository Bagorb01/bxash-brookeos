import chalk from "chalk";
import boxen from "boxen";
import { cristal } from "gradient-string";
import { typewriter } from "../../utils.js";

export default async function contact() {
  const content = `
  ${cristal("Email:")}       brookegorbandt[at]gmail
  ${cristal("LinkedIn:")}    ${chalk.underline(
    "https://www.linkedin.com/in/brookegorbandt/"
  )}

  P.S. Replace [at] with @ when emailing`;

  console.log("");

  console.log(
    boxen(content, {
      padding: 1,
      borderStyle: "round",
      borderColor: "greenBright",
      title: "Reach out if you feel the vibe",
      textAlignment: "left",
    })
  );

  await typewriter(
    chalk.greenBright("\n>> Type 'help' to revisit available commands or 'exit'.\n")
  );
}
