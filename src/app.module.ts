import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { NutricionistaModule } from './agents/nutricionista/nutricionista.module';
import { CoachModule } from './agents/coach/coach.module';
import { IaModule } from './ia/ia.module';

@Module({
  imports: [ChatModule, NutricionistaModule, CoachModule, IaModule],
})
export class AppModule {}
