import { getDocument } from 'pdfjs-dist';

export async function extractTextFromPDF(url) {
    const pdf = await getDocument(url).promise;
    
    let finalText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const strings = textContent.items.map(item => item.str);
        finalText += strings.join(' ');
    }
    
    return finalText;
}
