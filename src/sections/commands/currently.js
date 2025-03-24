import chalk from "chalk";
import { retro } from "gradient-string";
import {
  clearPreviousLines,
  typewriter,
  waitForKeyPress,
} from "../../utils.js";
import boxen from "boxen";

const currentInterests = [
  {
    header: "📚 Currently reading...",
    answer: "'Babel' by R.F. Kuang",
    description:
      "A dark academia novel about language, translation, resistance, and colonialism.",
  },
  {
    header: "🎶 Currently spinning...",
    answer: "Kyle Dion",
    description:
      "Velvety vocals, smooth falsetto, silk shirts, and lyrics that make you feel a little too much.",
  },
  {
    header: "🎙️ Currently listening to...",
    answer: "My favorite podcasts",
    description:
      "Radiolab to rewire how I see the world, Ride to fuel the chaos and keep the creativity loose, and The Daily to keep me responsibly overwhelmed",
  },
  {
    header: "🧠 Currently learning...",
    answer: "Sims4 modding",
    description:
      "Trying to teach my Sims the thrill of the racetrack. It’s called the Simtucky Derby, and yes — there will be hats.",
  },
  {
    header: "🔎 Currently obsessed with...",
    answer: "Historical homes and design",
    description:
      "I traced the history of my century-old home through archives and local lore — now I’m restoring it room by room, with love and caulk.",
  },
  {
    header: "🧐 Currently curious about...",
    answer: "Small Language Models (SLMs)",
    description:
      "Lean, fast, and powerful — I’m intrigued by small language models and what they unlock, I just haven’t had time to dig deep yet.",
  },
];

const continuePrompts = [
  "⏩ Let’s keep it rolling... (press any key to continue)\n",
  "🧠 More intel on deck.... (press any key to continue)\n",
  "📎 Ready when you are... (press any key to continue)\n",
  "📡 Receiving next transmission... (press any key to continue)\n",
  "📂 Loading next data packet.... (press any key to continue)\n",
  "👀 Still curious? Same... (press any key to continue)\n",
  "🕹️ Tap to proceed. We both know you want to... (press any key to continue)\n",
  "🔍 More obsessions await... (press any key to continue)\n",
];

function getRandomPrompt() {
  const index = Math.floor(Math.random() * continuePrompts.length);
  return continuePrompts[index];
}

export default async function currently() {
  for (const [index, interest] of currentInterests.entries()) {
    if (index !== 0) clearPreviousLines(3);
    console.log("");

    await typewriter(chalk.bold(interest.header));
    console.log("");

    const info = `${retro(interest.answer)}\n
    ${interest.description}
    `;
    console.log(
      boxen(info, {
        padding: 1,
        width: 60,
        borderStyle: "round",
        textAlignment: "center",
      })
    );

    console.log("");

    typewriter(chalk.greenBright(getRandomPrompt()));
    await waitForKeyPress();
  }

  clearPreviousLines(3);
  await typewriter(
    chalk.greenBright(">> That's all for now — thanks for tuning in. 🌱\n")
  );

  console.log(`✉️  Want to keep in touch? Type ${chalk.greenBright('contact')} to find me beyond the terminal.\n`);

}
