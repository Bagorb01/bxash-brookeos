import chalk from "chalk";
import boxen from "boxen";
import { atlas } from "gradient-string";
import { typewriter } from "../../utils.js";

export default async function skills() {
  // prettier-ignore
  const primaryStack = `
  ${atlas("Frontend:")}   Vue, React, Tailwind, Material UI
  ${atlas("Backend:")}    Node, Express
  ${atlas("Database:")}   PostgreSQL, MongoDB
  
  Tools currently in orbit 💫
  • Databricks
  • Python
  • LLMs
  • DDD`;

  console.log("");

  console.log(
    boxen(primaryStack, {
      title: `${chalk.white("PRIMARY STACK")}`,
      padding: 1,
      width: 80,
      borderStyle: "round",
      borderColor: "magentaBright",
    })
  );

  // prettier-ignore
  const strengths = `
  ${chalk.green("🤝 XP-inspired collaboration")} – Pairing, questioning, building trust into the process
  ${chalk.green("🧠 Debugging with focus")} – Untangling logic, spotting patterns, asking the right questions
  ${chalk.green("🧾 Docs that matter")} – Writing down the why, not just the how
  ${chalk.green("🧭 Visual systems thinking")} – I think in flows, not just functions`;

  console.log("");

  console.log(
    boxen(strengths, {
      title: `${chalk.magentaBright("STRENGTHS & STYLE")}`,
      padding: 1,
      width: 80,
      borderStyle: "round",
    })
  );

  console.log("");

  // prettier-ignore
  await typewriter(`➡️  Curious what I care about? Type ${chalk.blueBright('mission')} to check my mission protocols.\n`);
}
