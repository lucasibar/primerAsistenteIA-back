
import { Injectable } from '@nestjs/common';
import { NutricionistaService } from '../agents/nutricionista/nutricionista.service';
import { CoachService } from '../agents/coach/coach.service';

@Injectable()
export class ChatService {
  constructor(
    private nutricionista: NutricionistaService,
    private coach: CoachService,
  ) {}

  async responderConStream(mensaje: string, onData: (chunk: string) => void) {
    let prompt = '';

    if (mensaje.includes('comer') || mensaje.includes('dieta')) {
      prompt = `Sos un nutricionista... Mensaje: "${mensaje}"`;
    } else if (mensaje.includes('motivación') || mensaje.includes('confianza')) {
      prompt = `Sos un coach ontológico... Mensaje: "${mensaje}"`;
    } else {
      prompt = `Respondé de manera amigable a esto: "${mensaje}"`;
    }

    return this.nutricionista['iaService'].preguntarStream(prompt, onData);
  }
}
