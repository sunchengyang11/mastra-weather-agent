import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const weatherTool = createTool({
  id: 'get-weather',
  description: 'Get current weather for a city',
  inputSchema: z.object({
    location: z.string(),
  }),
  outputSchema: z.object({
    temperature: z.number(),
    condition: z.string(),
    location: z.string(),
  }),
  execute: async ({ location }) => {
    // 1. Geocoding
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        location
      )}&count=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.results?.[0]) {
      throw new Error(`Location '${location}' not found`);
    }

    const { latitude, longitude, name } = geoData.results[0];

    // 2. Weather
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
    );
    const weatherData = await weatherRes.json();

    return {
      temperature: weatherData.current.temperature_2m,
      condition: mapWeatherCode(weatherData.current.weather_code),
      location: name,
    };
  },
});

function mapWeatherCode(code: number): string {
  const map: Record<number, string> = {
    0: 'Clear',
    1: 'Mostly clear',
    2: 'Cloudy',
    3: 'Overcast',
    61: 'Rain',
    71: 'Snow',
    95: 'Thunderstorm',
  };

  return map[code] ?? 'Unknown';
}
