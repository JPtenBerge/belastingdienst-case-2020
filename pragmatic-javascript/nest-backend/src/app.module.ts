import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TeaService } from './tea.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TeaService],
})
export class AppModule {}
