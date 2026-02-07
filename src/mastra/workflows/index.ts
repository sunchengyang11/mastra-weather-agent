import { Workflow } from "@mastra/core";
import { weatherAgent, plannerAgent } from "../agents";

export const weatherWorkflow = new Workflow({
  name: "天気ワークフロー",
  steps: [
    {
      id: "step-weather",
      agent: weatherAgent,
      input: {
        city: "string"
      }
    },
    {
      id: "step-planner",
      agent: plannerAgent,
      inputFrom: "step-weather"
    }
  ]
});

export const workflows = {
  weatherWorkflow
};
