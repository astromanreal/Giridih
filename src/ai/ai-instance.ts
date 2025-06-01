
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

const effectivePlugins = [];
let defaultModelConfig = {};

if (process.env.GOOGLE_GENAI_API_KEY) {
  effectivePlugins.push(googleAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY }));
  // Only set default model if the plugin is active, to avoid errors if model requires an unloaded plugin.
  // Flows should ideally specify their models, or this can be set if your flows rely on it.
  // defaultModelConfig = { model: 'googleai/gemini-2.0-flash' };
} else {
  console.warn(
    'WARNING: GOOGLE_GENAI_API_KEY is not set. Genkit will be initialized without Google AI capabilities. AI-dependent features will use fallbacks or be disabled.'
  );
}

export const ai = genkit({
  promptDir: './prompts', // This may or may not be useful if no plugins are active
  plugins: effectivePlugins,
  ...defaultModelConfig, // Spread conditional default model config
});
