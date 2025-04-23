import { Injectable } from '@nestjs/common';
import { IaService } from '../../ia/ia.service';

@Injectable()
export class CoachService {
  constructor(private readonly iaService: IaService) {}

  async responder(mensaje: string): Promise<string> {
    const prompt = `Sos un coach ontológico. Ayudá al usuario a reflexionar con preguntas poderosas y frases que inviten a la introspección. Mensaje del usuario: "${mensaje}"`;
    return await this.iaService.preguntarAlModelo(prompt);
  }
}
