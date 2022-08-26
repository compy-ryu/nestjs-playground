import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateCompyDto {
  @ApiProperty({ description: '이름', default: '류현승' })
  @IsString({ message: '이름은 문자열만 입력할 수 있습니다.' })
  @MaxLength(5, { message: '이름은 최대 5자까지 입력할 수 있습니다.' })
  name: string;

  @ApiProperty({ description: '나이', default: 28 })
  @Min(1, { message: '나이는 1세에서 99세까지 입력할 수 있습니다.' })
  @Max(99, { message: '나이는 1세에서 99세까지 입력할 수 있습니다.' })
  age: number;
}
