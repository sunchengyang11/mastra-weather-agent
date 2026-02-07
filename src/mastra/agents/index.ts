import { Agent } from '@mastra/core/agent';
import { weatherTool } from '../tools';
import { weatherWorkflow } from '../workflows';

/**
 * 内部 Agent 1
 * 只负责调用 weatherTool 获取天气数据
 */
export const weatherFetcherAgent = new Agent({
  id: 'weather-fetcher-agent',
  name: 'Weather Fetcher Agent',
  instructions: `
Fetch current weather information for a given city.
Always use the weatherTool.
Return raw weather data.
`,
  model: process.env.MODEL || 'openai/gpt-4o',
  tools: {
    weatherTool,
  },
});

/**
 * 内部 Agent 2
 * 负责把天气数据整理成自然语言
 */
export const weatherResponderAgent = new Agent({
  id: 'weather-responder-agent',
  name: 'Weather Responder Agent',
  instructions: `
You are a helpful assistant.
Summarize the provided weather data clearly and concisely for the user.
`,
  model: process.env.MODEL || 'openai/gpt-4o',
});

/**
 * UI Agent（给 Mastra Cloud Agents 页面用）
 * 用户在 UI 中聊天，实际上触发 workflow
 */
export const weatherUIAgent = new Agent({
  id: 'weather-ui-agent',
  name: 'Weather Agent',
  instructions: `
You are a weather assistant.
When the user asks about the weather, call the weather workflow
and return the result to the user.
`,
  model: process.env.MODEL || 'openai/gpt-4o',
  workflows: {
    weatherWorkflow,
  },
});
