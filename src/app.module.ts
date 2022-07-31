import { Module } from '@nestjs/common';
import { TrialModule } from './trial/trial.module';

@Module({
  imports: [TrialModule],
})
export class AppModule {}
