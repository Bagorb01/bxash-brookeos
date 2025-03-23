import boxen from "boxen";
import chalk from "chalk";
import { teen } from "gradient-string";

export default function mission() {
  // prettier-ignore
  const mission = `
    ${teen("💡 Femtech & gender health equity")}
       Companies working to close the gender health gap through thoughtful tech
  
    ${teen("🤝 Tools for connection & collaboration")}
       Remote-friendly platforms that help people work, think, and build together (e.g. SoWork, Miro)
  
    ${teen("🧠 Teams that value...")}
       Curiosity, clarity, thoughtful engineering, user-centered design, and care in the process
  `;

  console.log('')

  console.log(
    boxen(mission, {
      title: "MISSION ALIGNMENT",
      padding: 1,
      width: 80,
      borderStyle: "round",
      borderColor: "blueBright",
    })
  );

  console.log('')

  console.log(`➡️  Still with me? Type ${chalk.yellowBright('currently')} to see what's lighting me up lately.\n`);

  console.log('')
}
