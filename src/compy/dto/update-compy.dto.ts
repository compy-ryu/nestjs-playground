import { PartialType } from '@nestjs/mapped-types';
import { CreateCompyDto } from './create-compy.dto';

export class UpdateCompyDto extends PartialType(CreateCompyDto) {}
