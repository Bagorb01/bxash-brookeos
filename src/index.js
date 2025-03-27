#!/usr/bin/env node

import { waitForKeyPress } from "./utils.js";
import intro, { boot } from "./sections/intro.js";
import { startCLI } from "./sections/menu.js";

intro();
await waitForKeyPress();
await boot();
await startCLI();
