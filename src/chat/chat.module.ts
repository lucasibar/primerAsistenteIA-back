import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { NutricionistaModule } from '../agents/nutricionista/nutricionista.module';
import { CoachModule } from '../agents/coach/coach.module';
import { IaModule } from '../ia/ia.module';

@Module({
  imports: [NutricionistaModule, CoachModule, IaModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
