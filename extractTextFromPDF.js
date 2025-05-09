// extractTextFromPDF.js
import fs from 'fs';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

/**
 * Extracts all text from a PDF file.
 * @param {string} filePath - The path to the PDF file.
 * @returns {Promise<string>} - The extracted text.
 */
export async function extractTextFromPDF(filePath) {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const pdfDocument = await getDocument({ data }).promise;

  let text = '';
  for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
    const page = await pdfDocument.getPage(pageNum);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(' ');
    text += `\n\nPage ${pageNum}:\n${pageText}`;
  }

  return text;
}
