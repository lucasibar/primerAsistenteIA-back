import { Module } from '@nestjs/common';
import { IaService } from './ia.service';

@Module({
  providers: [IaService],
  exports: [IaService], // 👈 esto es clave
})
export class IaModule {}
