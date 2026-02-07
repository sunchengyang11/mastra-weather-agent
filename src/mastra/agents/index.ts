import { Agent } from "@mastra/core";

/**
 * 天気を取得するエージェント
 */
export const weatherAgent = new Agent({
  name: "天気エージェント",
  instructions: "都市名を受け取り、現在の天気を簡単な日本語で返してください。"
});

/**
 * 行動アドバイスを考えるエージェント
 */
export const plannerAgent = new Agent({
  name: "計画エージェント",
  instructions: "天気の情報をもとに、外出に関するアドバイスを日本語で出してください。"
});

export const agents = {
  weatherAgent,
  plannerAgent
};
