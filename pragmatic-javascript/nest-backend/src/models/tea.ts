import { IsNotEmpty, IsUrl } from 'class-validator';

export class Tea {
  id: number;

  @IsNotEmpty()
  flavor: string;

  @IsUrl()
  photo: string;
}
