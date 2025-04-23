import { Injectable } from '@nestjs/common';
import { IaService } from '../../ia/ia.service';

@Injectable()
export class NutricionistaService {
  constructor(private readonly iaService: IaService) {}

  async responder(mensaje: string): Promise<string> {
    const prompt = `Sos un nutricionista especializado en salud digestiva. Respondé de forma clara y profesional. Mensaje del usuario: "${mensaje}"`;
    return await this.iaService.preguntarAlModelo(prompt);
  }
}
