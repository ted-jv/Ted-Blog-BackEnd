import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/auth/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private authRepository: Repository<Users>,
  ) {}
  async createSignUp(users: Users): Promise<void> {
    await this.authRepository.save(users);
  }

  findAll(): Promise<Users[]> {
    return this.authRepository.find();
  }

  // findOne(id: string): Promise<Users> {
  //   return this.authRepository.findOne();
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
