import { Agent } from '@mastra/core/agent';
import { weatherTool } from '../tools';

/**
 * Agent 1:
 * 只负责调用 tool 获取天气数据
 */
export const weatherFetcherAgent = new Agent({
  id: 'weather-fetcher-agent',
  name: 'Weather Fetcher Agent',
  instructions: `
You fetch current weather information for a given city.
Always use the weatherTool to get the data.
Return the raw weather result.
`,
  model: process.env.MODEL || 'openai/gpt-4o',
  tools: {
    weatherTool,
  },
});

/**
 * Agent 2:
 * 负责把天气数据整理成用户可读的回答
 */
export const weatherResponderAgent = new Agent({
  id: 'weather-responder-agent',
  name: 'Weather Responder Agent',
  instructions: `
You are a helpful assistant.
Based on the provided weather data, respond to the user clearly and concisely.
Include temperature and general conditions.
`,
  model: process.env.MODEL || 'openai/gpt-4o',
});
