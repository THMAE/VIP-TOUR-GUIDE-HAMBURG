import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const imagesToGenerate = [
  { name: 'hero.jpg', prompt: 'A stunning, modern, and exclusive night view of Hamburg harbor and Elbphilharmonie, cinematic lighting, luxury vibe', aspect: '16:9' },
  { name: 'limousine.jpg', prompt: 'Close up of a luxury black limousine front grill, elegant, VIP transport, Hamburg city background blurred', aspect: '4:3' },
  { name: 'tour.jpg', prompt: 'Elbphilharmonie Hamburg at sunset, exclusive perspective, architectural beauty', aspect: '4:3' },
  { name: 'gastro.jpg', prompt: 'Exclusive fine dining table setup, Michelin star restaurant, elegant wine glasses, warm romantic lighting', aspect: '4:3' },
  { name: 'guide.jpg', prompt: 'Historic Speicherstadt Hamburg, beautiful lighting, exclusive private tour atmosphere', aspect: '4:3' },
  { name: 'shopping.jpg', prompt: 'Luxury shopping bags in a high-end boutique, elegant setting, Neuer Wall Hamburg vibe', aspect: '4:3' },
  { name: 'nightlife.jpg', prompt: 'Exclusive VIP club lounge, champagne on table, moody lighting, sophisticated nightlife', aspect: '4:3' },
  { name: 'sports.jpg', prompt: 'View from a luxury VIP box in a modern sports stadium, comfortable seating, premium experience', aspect: '4:3' },
  { name: 'yacht.jpg', prompt: 'Luxury private yacht cruising on the Alster lake in Hamburg, elegant lifestyle', aspect: '4:3' },
  { name: 'portrait.jpg', prompt: 'Portrait of a very attractive, elegant, and sophisticated young woman, wearing a stylish business chic outfit, welcoming smile, luxury concierge, blurred Hamburg background', aspect: '3:4' }
];

async function generateImages() {
  const publicDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const img of imagesToGenerate) {
    console.log(`Generating ${img.name}...`);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: img.prompt,
        config: {
          imageConfig: {
            aspectRatio: img.aspect,
            imageSize: '1K'
          }
        }
      });
      
      let base64Data = '';
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          base64Data = part.inlineData.data;
          break;
        }
      }
      
      if (base64Data) {
        fs.writeFileSync(path.join(publicDir, img.name), Buffer.from(base64Data, 'base64'));
        console.log(`Saved ${img.name}`);
      } else {
        console.error(`No image data returned for ${img.name}`);
      }
    } catch (e) {
      console.error(`Failed to generate ${img.name}:`, e);
    }
  }
}

generateImages();
