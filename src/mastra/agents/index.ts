import { createAgent } from "@mastra/core";

/**
 * 天気を返すだけの Agent（ダミー）
 */
const WeatherAgent = createAgent({
  name: "WeatherAgent",
  description: "都市名から天気情報を返す Agent",
  run: async ({ input }) => {
    const city = input as string;
    return `${city} の天気は「晴れ ☀️」です`;
  },
});

/**
 * 天気を元にコメントする Agent
 */
const AdviceAgent = createAgent({
  name: "AdviceAgent",
  description: "天気情報を元にアドバイスを返す Agent",
  run: async ({ input }) => {
    const weather = input as string;
    return `${weather}。洗濯日和ですね。`;
  },
});

/**
 * ⚠️ 必ずまとめて export
 */
export const agents = {
  WeatherAgent,
  AdviceAgent,
};
