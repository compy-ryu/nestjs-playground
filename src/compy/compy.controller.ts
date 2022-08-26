import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CompyService } from './compy.service';
import { CreateCompyDto } from './dto/create-compy.dto';
import { UpdateCompyDto } from './dto/update-compy.dto';

@Controller('compy')
@ApiTags('콤피 컨트롤러')
export class CompyController {
  constructor(private readonly compyService: CompyService) {}

  @Post()
  @ApiOperation({
    summary: 'Compy 생성 API',
    description: '콤피 객체를 만듭니다.',
  })
  @ApiCreatedResponse({
    description: '콤피를 생성한다 - Response',
    type: CreateCompyDto,
  })
  create(@Body() createCompyDto: CreateCompyDto) {
    return this.compyService.create(createCompyDto);
  }

  @Get()
  @ApiOperation({
    summary: '모든 Compy 조회 API',
    description: '생성된 콤피 객체 모두를 조회합니다.',
  })
  @ApiCreatedResponse({
    description: '생성된 콤피 모두를 반환합니다.',
  })
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
