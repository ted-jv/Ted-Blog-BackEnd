import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { JoinRequestDtd } from './dto/join.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // 다른 곳에서 값을 가져와서 아래 사용했으면 constructor에 꼭 초기값 넣어줄것 )

  @ApiResponse({ status: 200, description: '성공' })
  @ApiResponse({ status: 500, description: '에러' })
  @ApiOperation({ summary: '회원가입' })
  @Post() // 회원가입
  createSignUp(@Body() data: JoinRequestDtd) {
    this.usersService.createSignUp(data.email, data.nickname, data.password);
  }

  // @Post() // 로그인
  // createLogin(@Body() data: JoinRequestDtd) {
  //   return this.usersService.createLogin(data);
  // }

  @Get()
  getUsers(@User() user) {
    return user;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
