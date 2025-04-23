import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IaService {
  private readonly OLLAMA_URL = 'http://localhost:11434/api/generate';

  async preguntarAlModelo(prompt: string): Promise<string> {
    try {
      const response = await axios.post(this.OLLAMA_URL, {
        model: 'mistral',
        prompt,
        stream: false,
      });

      return response.data.response;
    } catch (error) {
      console.error('Error al conectar con Mistral:', error);
      return 'Hubo un error al intentar responder. Intentá de nuevo más tarde.';
    }
  }

  async preguntarStream(prompt: string, onData: (chunk: string) => void): Promise<void> {
    const response = await axios.post(
      this.OLLAMA_URL,
      {
        model: 'mistral',
        prompt: prompt,
        stream: true,
      },
      {
        responseType: 'stream',
      },
    );

    return new Promise((resolve) => {
      response.data.on('data', (chunk) => {
        const lines = chunk.toString().split('\n').filter((line) => line.trim() !== '');
        for (const line of lines) {
          try {
            const parsed = JSON.parse(line);
            if (parsed.response) {
              onData(parsed.response);
            }
          } catch (err) {
            console.error('Error parsing chunk', err);
          }
        }
      });

      response.data.on('end', resolve);
    });
  }
}
