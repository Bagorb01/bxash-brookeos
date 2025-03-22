import chalk from "chalk";
import boxen from "boxen";

export default function whoami() {
  console.log(
    boxen(chalk.cyanBright("USER PROFILE"), {
      padding: 1,
      margin: 1,
      width: 70,
      textAlignment: "center",
      borderStyle: "round",
    })
  );
  //TODO: Include mission alignment
  console.log(`
    ${chalk.bold.magentaBright("Name:")}             Brooke Gorbandt
    ${chalk.bold.magentaBright("Role:")}             Senior Software Engineer @ Humana
    ${chalk.bold.magentaBright("Location:")}         Louisville, KY
    ${chalk.bold.magentaBright("Vibe:")}             Slightly anxious, highly visual, structured thinker, cozy at all times
    ${chalk.bold.magentaBright("Specialties:")}      Connecting dots, spotting edge cases, 
                      improving team processes, debugging with care, 
                      and documenting the why
    ${"Pro tip: Type 'skills' to see tech stack, or 'currently' to see what I’m into."}
`);
}
