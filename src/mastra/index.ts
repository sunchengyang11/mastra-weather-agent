import { agents } from "./agents";
import { workflows } from "./workflows";
import { tools } from "./tools";
import { scorers } from "./scorers";

/**
 * Mastra Cloud が認識する唯一のエクスポート
 */
export const mastra = {
  agents,
  workflows,
  tools,
  scorers,
};
