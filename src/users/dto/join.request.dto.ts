import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDtd {
  @ApiProperty({ example: 'arsenal@gmail.com', description: '이메일', required: true })
  public email: string;

  @ApiProperty({ example: '아스널', description: '닉네임', required: true })
  public nickname: string;

  @ApiProperty({ example: 'asd123', description: '비밀번호', required: true })
  public password: string;
}
