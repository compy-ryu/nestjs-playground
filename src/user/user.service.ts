import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  private async checkUserExist(email, name): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: [{ email }, { name }],
    });

    return !!user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userExist = await this.checkUserExist(
      createUserDto.email,
      createUserDto.name,
    );

    if (userExist) {
      throw new UnprocessableEntityException('이미 가입되어있습니다.');
    }

    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
