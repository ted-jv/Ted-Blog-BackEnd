import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class SignUpRequestDtd {
  @ApiProperty({ example: 'arsenal@gmail.com', description: '이메일', required: true })
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '아스널', description: '닉네임', required: true })
  public nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'asd123', description: '비밀번호', required: true })
  public password: string;
}
