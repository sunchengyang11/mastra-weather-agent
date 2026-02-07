import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';
import {
  weatherFetcherAgent,
  weatherResponderAgent,
} from '../agents';

/**
 * Step 1:
 * 使用 WeatherFetcherAgent 获取天气数据
 */
const fetchWeatherStep = createStep({
  id: 'fetch-weather',
  inputSchema: z.object({
    city: z.string(),
  }),
  outputSchema: z.any(),
  execute: async ({ inputData }) => {
    const response = await weatherFetcherAgent.run([
      {
        role: 'user',
        content: `Get the current weather for ${inputData.city}`,
      },
    ]);

    return response;
  },
});

/**
 * Step 2:
 * 使用 WeatherResponderAgent 整理回答
 */
const respondWeatherStep = createStep({
  id: 'respond-weather',
  inputSchema: z.any(),
  outputSchema: z.object({
    result: z.string(),
  }),
  execute: async ({ inputData }) => {
    const response = await weatherResponderAgent.run([
      {
        role: 'user',
        content: `Format the following weather data for the user:\n${JSON.stringify(inputData)}`,
      },
    ]);

    return {
      result: response.text,
    };
  },
});

const weatherWorkflow = createWorkflow({
  id: 'weather-workflow',
  inputSchema: z.object({
    city: z.string(),
  }),
  outputSchema: z.object({
    result: z.string(),
  }),
})
  .then(fetchWeatherStep)
  .then(respondWeatherStep);

weatherWorkflow.commit();

export { weatherWorkflow };
