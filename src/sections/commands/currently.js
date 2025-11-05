import chalk from "chalk";
import { fruit } from "gradient-string";
import {
  clearPreviousLines,
  typewriter,
  waitForKeyPress,
  delay,
} from "../../utils.js";

const currentInterests = [
  {
    header: "📚 Currently reading...",
    answer: "Tomorrow, and Tomorrow, and Tomorrow",
    description:
      "A decades-spanning story of two friends who reunite to make video games and navigate creativity, fame, grief, and the complicated blur between love and friendship.",
  },
  {
    header: "🎶 Currently spinning...",
    answer: "Isiah Falls",
    description:
      "Smooth vocals, intimate lyrics, and just dangerous enough that you lean in before you realize you’ve already fallen",
  },
  {
    header: "🎙️ Currently listening to...",
    answer: "My favorite podcasts",
    description: `• Radiolab and This American Life — to rewire how I see the world\n• Ride — for chaotic, creative energy\n• The Daily — to stay responsibly overwhelmed`,
  },
  {
    header: "🧠 Currently learning...",
    answer: "Sims4 modding",
    description:
      "Trying to teach my Sims the thrill of the racetrack. It’s called the Simtucky Derby, and yes — there will be hats.",
  }
];

const continuePrompts = [
  ">> ⏩ Let’s keep it rolling... (press any key to continue)\n",
  ">> 🧠 More intel on deck.... (press any key to continue)\n",
  ">> 📎 Ready when you are... (press any key to continue)\n",
  ">> 📡 Receiving next transmission... (press any key to continue)\n",
  ">> 📂 Loading next data packet.... (press any key to continue)\n",
  ">> 👀 Still curious? Same... (press any key to continue)\n",
  ">> 🕹️ Tap to proceed. We both know you want to... (press any key to continue)\n",
  ">> 🔍 More obsessions await... (press any key to continue)\n",
];

function getRandomPrompt() {
  const index = Math.floor(Math.random() * continuePrompts.length);
  return continuePrompts[index];
}

export default async function currently() {
  for (const [index, interest] of currentInterests.entries()) {
    if (index !== 0) clearPreviousLines(3);
    console.log("");

    await typewriter(`${chalk.ansi256(220)(interest.header)}`);
    await delay(1000);
    console.log(fruit(interest.answer));
    await delay(500);
    await typewriter(`${interest.description}`, 20);

    console.log("");

    if (index !== currentInterests.length - 1) {
      typewriter(chalk.greenBright(getRandomPrompt()));
      await waitForKeyPress();
    }
  }

  await typewriter(chalk.bgGreenBright(">> Brain dump complete — for now.\n"));

  await typewriter(
    `✉️  Want to keep in touch? Type ${chalk.greenBright(
      "contact"
    )} to find me beyond the terminal.\n`
  );
}
