import { Module } from '@nestjs/common';
import { NutricionistaService } from './nutricionista.service';
import { IaModule } from '../../ia/ia.module';

@Module({
  imports: [IaModule],
  providers: [NutricionistaService],
  exports: [NutricionistaService], // 👈 IMPORTANTE
})
export class NutricionistaModule {}
