import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { Tea } from './models/tea';
import { TeaService } from './tea.service';

@Controller()
export class AppController {
  // dependency injection
  constructor(private readonly teaService: TeaService) {}

  @Get()
  @Render('index')
  get(): object {
    return {
      teas: this.teaService.teas
    };
  }

  @Post('/tea')
  post(@Body() newTea: Tea) {
    this.teaService.teas.push(newTea);
    return 'Bedankt voor de thee!';
  }
}
