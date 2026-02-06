import { Agent } from "@mastra/core";

export const 天気取得エージェント = new Agent({
  name: "天気取得エージェント",
  instructions: "都市名を受け取り、現在の天気を返してください。",
});

export const 判断エージェント = new Agent({
  name: "判断エージェント",
  instructions: "天気情報をもとに、外出するかどうかを判断してください。",
});

export const agents = {
  天気取得エージェント,
  判断エージェント,
};
