import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './join.request.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
