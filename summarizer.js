// summarizer.js
import { pipeline } from '@xenova/transformers';

export async function summarizeText(text) {
  try {
    const summarizer = await pipeline('summarization', 'Xenova/bart-large-cnn');
    const summary = await summarizer(text, { max_length: 150, min_length: 50 });
    return summary[0].summary_text;
  } catch (error) {
    console.error('Error summarizing text:', error);
    return 'Summary generation failed.';
  }
}
