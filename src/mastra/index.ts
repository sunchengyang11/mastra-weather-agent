import { createMastra } from "@mastra/core";
import { agents } from "./agents";
import { workflows } from "./workflows";

export const mastra = createMastra({
  agents,
  workflows,

  // 🔴 关键：明确不使用 storage
  storage: {
    type: "memory"
  }
});
