import { Injectable } from '@nestjs/common';
import { CreateCompyDto } from './dto/create-compy.dto';
import { UpdateCompyDto } from './dto/update-compy.dto';

@Injectable()
export class CompyService {
  create(createCompyDto: CreateCompyDto) {
    return 'This action adds a new compy';
  }

  findAll() {
    return `This action returns all compy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compy`;
  }

  update(id: number, updateCompyDto: UpdateCompyDto) {
    return `This action updates a #${id} compy`;
  }

  remove(id: number) {
    return `This action removes a #${id} compy`;
  }
}
