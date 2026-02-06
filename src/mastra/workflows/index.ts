import { createWorkflow } from "@mastra/core";
import { agents } from "../agents";

/**
 * 天気確認ワークフロー
 * Studio の Step UI / Time Travel に表示される
 */
const weatherWorkflow = createWorkflow({
  name: "weather-workflow",
  description: "都市の天気を確認するワークフロー",
  run: async ({ input, step }) => {
    const city = input as string;

    // Step 1: 天気取得
    const weather = await step.run(
      "天気を取得",
      () => agents.WeatherAgent.run({ input: city })
    );

    // Step 2: アドバイス生成
    const advice = await step.run(
      "アドバイス生成",
      () => agents.AdviceAgent.run({ input: weather })
    );

    return {
      city,
      weather,
      advice,
    };
  },
});

/**
 * ⚠️ workflows として export
 */
export const workflows = {
  weatherWorkflow,
};
