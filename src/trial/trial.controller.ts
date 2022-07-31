import { Controller, Get, Param } from '@nestjs/common';
import { TrialService } from './trial.service';

@Controller('trial')
export class TrialController {
  constructor(private boardsService: TrialService) {}

  @Get('/:id')
  getById(@Param('id') id: number): string {
    return this.boardsService.getById(id);
  }
}
