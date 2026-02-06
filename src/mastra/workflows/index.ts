import { Workflow } from "@mastra/core";
import { 天気取得エージェント, 判断エージェント } from "../agents";

export const 天気ワークフロー = new Workflow({
  name: "天気ワークフロー",
  steps: [
    {
      agent: 天気取得エージェント,
      input: { city: "東京" },
    },
    {
      agent: 判断エージェント,
    },
  ],
});

export const workflows = {
  天気ワークフロー,
};
