import { Injectable } from '@nestjs/common';

@Injectable()
export class TrialService {
  getById(id: number): string {
    return `trialService.getById : ${id}`;
  }
}
