import { Mastra } from '@mastra/core/mastra';
import { weatherWorkflow } from './workflows';
import { weatherUIAgent } from './agents';

export const mastra = new Mastra({
  workflows: {
    weatherWorkflow,
  },
  agents: {
    weatherUIAgent,
  },
});
