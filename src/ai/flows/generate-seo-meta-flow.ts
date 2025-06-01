
'use server';
/**
 * @fileOverview AI flow for generating SEO meta tags.
 *
 * - generateSeoMetaTags - Generates SEO title, description, and keywords for given content.
 * - SeoMetaInput - Input type for the flow.
 * - SeoMetaOutput - Output type for the flow.
 */

import { ai } from '@/ai/ai-instance';
import { z } from 'genkit';
import type { Prompt } from 'genkit/prompt';

const SeoMetaInputSchema = z.object({
  title: z.string().describe('The original title of the content (e.g., blog post title).'),
  contentSummary: z.string().describe('A summary or the main content of the page to use for SEO generation.'),
  contentType: z.string().optional().describe('The type of content, e.g., "blog post", "destination page", "event". Helps tailor the SEO tags.'),
});
export type SeoMetaInput = z.infer<typeof SeoMetaInputSchema>;

const SeoMetaOutputSchema = z.object({
  seoTitle: z.string().describe('An optimized title tag for SEO, ideally between 50-60 characters. It should be compelling and include relevant keywords.'),
  metaDescription: z.string().describe('An optimized meta description, ideally between 150-160 characters. It should be a concise summary that encourages clicks.'),
  keywords: z.array(z.string()).optional().describe('A list of 3-5 relevant keywords or keyphrases. (Optional as keywords meta tag has less impact now).'),
});
export type SeoMetaOutput = z.infer<typeof SeoMetaOutputSchema>;

// Conditionally define seoPrompt
let seoPromptInstance: Prompt<typeof SeoMetaInputSchema, typeof SeoMetaOutputSchema> | undefined = undefined;

if (process.env.GOOGLE_GENAI_API_KEY) {
  try {
    seoPromptInstance = ai.definePrompt({
      name: 'generateSeoMetaPrompt',
      model: 'googleai/gemini-2.0-flash', // Explicitly define the model here
      input: { schema: SeoMetaInputSchema },
      output: { schema: SeoMetaOutputSchema },
      prompt: `
        You are an SEO expert tasked with generating optimized meta tags for web content.
        Your primary focus is the Giridih district in Jharkhand, India. Ensure all generated tags clearly reflect this geographical focus and are optimized for users searching for information about Giridih.

        Given the following information about a piece of content:
        Original Title: {{{title}}}
        Content Summary: {{{contentSummary}}}
        {{#if contentType}}Content Type: {{{contentType}}}{{/if}}

        Please generate the following SEO elements:
        1.  seoTitle: An SEO-optimized title. It should be concise (50-60 characters), engaging, and incorporate primary keywords naturally. It must prominently feature "Giridih".
        2.  metaDescription: An SEO-optimized meta description (150-160 characters). It should summarize the content accurately, highlight its relevance to Giridih, and include a call-to-action or key benefits to encourage clicks from search results.
        3.  keywords: (Optional) A list of 3-5 relevant keywords or keyphrases. Choose terms that accurately reflect the content and that users might search for, with a strong emphasis on "Giridih" and related terms.

        Prioritize clarity, relevance, and click-through rate for the seoTitle and metaDescription.
        If the content type is "blog post", try to make the title sound like an engaging article about Giridih.
        If the content type is "destination page", focus on what makes the destination in Giridih unique and attractive.
      `,
    });
  } catch (e: any) {
    console.error("Error defining seoPromptInstance. AI SEO features might be degraded or unavailable. Error:", e.message || e);
    seoPromptInstance = undefined; // Ensure it's undefined on error
  }
}


const generateSeoMetaFlow = ai.defineFlow(
  {
    name: 'generateSeoMetaFlow',
    inputSchema: SeoMetaInputSchema,
    outputSchema: SeoMetaOutputSchema,
  },
  async (input: SeoMetaInput): Promise<SeoMetaOutput> => {
    // Check if API key is missing OR if seoPromptInstance failed to initialize
    if (!process.env.GOOGLE_GENAI_API_KEY || !seoPromptInstance) {
      console.warn(
        'WARNING: GOOGLE_GENAI_API_KEY is not set or seoPromptInstance is not available. AI-powered SEO meta tags will not be generated. Returning basic fallback meta tags.'
      );
      const fallbackTitle = `${input.title.substring(0, 50)} - Giridih`;
      const fallbackDescription = `${input.contentSummary.substring(0, 130)}... Explore more about Giridih.`;
      return {
        seoTitle: fallbackTitle,
        metaDescription: fallbackDescription,
        keywords: ['Giridih', input.contentType || 'information'].filter(Boolean) as string[],
      };
    }

    try {
      const { output } = await seoPromptInstance(input);
      if (!output) {
        console.error('AI SEO prompt did not return an output. Using fallback meta tags.');
        const fallbackTitle = `${input.title.substring(0, 50)} - Giridih`;
        const fallbackDescription = `${input.contentSummary.substring(0, 130)}... Explore more about Giridih.`;
        return {
            seoTitle: fallbackTitle,
            metaDescription: fallbackDescription,
            keywords: ['Giridih', input.contentType || 'information'].filter(Boolean) as string[],
        };
      }
      return {
          ...output,
          keywords: output.keywords || ['Giridih'], // Ensure Giridih is a default keyword
      };
    } catch (flowError: any) {
      let errorMessage = 'Unknown error during AI SEO meta tag generation flow.';
      if (flowError instanceof Error) {
        errorMessage = flowError.message;
      } else if (typeof flowError === 'string') {
        errorMessage = flowError;
      } else if (flowError && typeof flowError === 'object' && 'toString' in flowError) {
        errorMessage = flowError.toString();
      }
      console.error(`AI SEO Meta Tag Generation Flow Error: ${errorMessage}. Details:`, flowError);
      
      const fallbackTitle = `${input.title.substring(0, 50)} - Giridih`;
      const fallbackDescription = `${input.contentSummary.substring(0, 130)}... Explore more about Giridih.`;
      return {
        seoTitle: fallbackTitle,
        metaDescription: fallbackDescription,
        keywords: ['Giridih', input.contentType || 'information'].filter(Boolean) as string[],
      };
    }
  }
);

export async function generateSeoMetaTags(input: SeoMetaInput): Promise<SeoMetaOutput> {
  return generateSeoMetaFlow(input);
}
