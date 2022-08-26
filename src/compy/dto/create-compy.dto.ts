import { ApiProperty } from '@nestjs/swagger';

export class CreateCompyDto {
  @ApiProperty({ description: '이름', default: '류현승' })
  name: string;

  @ApiProperty({ description: '나이', default: 28 })
  age: number;
}
