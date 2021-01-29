import { Injectable } from '@nestjs/common';
import { Tea } from './models/tea';

@Injectable()
export class TeaService {
  teas: Tea[] = [
    {
      id: 4,
      flavor: 'Earl Grey',
      photo: 'heb ik niet',
    },
    {
      id: 8,
      flavor: 'English Blend',
      photo: 'heb ik ook niet',
    },
  ];
}
