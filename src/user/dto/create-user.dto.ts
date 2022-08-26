import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: '이름', default: '캄피' })
  @Length(1, 5, { message: '이름은 1자에서 5자까지 입력할 수 있습니다.' })
  name: string;

  @IsEmail({}, { message: '이메일 주소를 정확히 입력해주세요.' })
  @ApiProperty({ description: '이메일', default: 'test@test.com' })
  email: string;
}
