import { createMastra } from "@mastra/core";
import { agents } from "./agents";
import { workflows } from "./workflows";
import { tools } from "./tools";
import { scorers } from "./scorers";

export default createMastra({
  agents,
  workflows,
  tools,
  scorers,
});
