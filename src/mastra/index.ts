import { Mastra } from '@mastra/core/mastra';
import { weatherWorkflow } from './workflows';

export const mastra = new Mastra({
  workflows: {
    weatherWorkflow,
  },
});
