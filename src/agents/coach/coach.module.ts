import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';
import { IaModule } from '../../ia/ia.module';


@Module({
  imports: [IaModule],
  providers: [CoachService],
  exports: [CoachService],
})
export class CoachModule {}
