import chalk from "chalk";
import boxen from "boxen";
import { summer } from "gradient-string";

export default function whoamiSummary() {
  console.log("");

  // prettier-ignore
  const profile = `
    ${summer("Name:")}             ${chalk.ansi256(214)("Brooke Gorbandt")}
    ${summer("Role:")}             Senior Software Engineer @ Humana
    ${summer("Location:")}         Louisville, KY\n
    ${summer("Vibe:")}             Slightly anxious, highly visual, structured 
                      thinker, cozy at all times\n
    ${summer("Specialties:")}      Connecting dots, spotting edge cases,
                      improving team processes, debugging with care,
                      and documenting the why
  `;
  console.log(
    boxen(profile, {
      title: "PROFILE",
      padding: 1,
      width: 80,
      borderStyle: "round",
      borderColor: "cyanBright",
    })
  );

  console.log("");

  console.log(`➡️  Wondering what I’m good at? Type ${chalk.magentaBright('skills')} to peek into my toolbox.\n`);

  console.log("");
}
