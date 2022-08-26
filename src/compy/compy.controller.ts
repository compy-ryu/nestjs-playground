import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompyService } from './compy.service';
import { CreateCompyDto } from './dto/create-compy.dto';
import { UpdateCompyDto } from './dto/update-compy.dto';

@Controller('compy')
export class CompyController {
  constructor(private readonly compyService: CompyService) {}

  @Post()
  create(@Body() createCompyDto: CreateCompyDto) {
    return this.compyService.create(createCompyDto);
  }

  @Get()
  findAll() {
    return this.compyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompyDto: UpdateCompyDto) {
    return this.compyService.update(+id, updateCompyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compyService.remove(+id);
  }
}
