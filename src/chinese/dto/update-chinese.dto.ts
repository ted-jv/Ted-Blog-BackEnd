import { PartialType } from '@nestjs/mapped-types';
import { CreateChineseDto } from './create-chinese.dto';

export class UpdateChineseDto extends PartialType(CreateChineseDto) {}
