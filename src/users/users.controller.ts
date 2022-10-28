import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { JoinRequestDtd } from './dto/join.request.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // 다른 곳에서 값을 가져와서 아래 사용했으면 constructor에 꼭 초기값 넣어줄것 )

  @Post() // 회원가입
  postUsers(@Body() data: JoinRequestDtd) {
    this.usersService.postUsers(data.email, data.nickname, data.password);
  }

  @Post() // 로그인
  postUsers(@Body() data: JoinRequestDtd) {
    return this.usersService.postUsers(data);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
