import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}
  
  async getUser(){
    return this.prisma.user.findMany();
  }

  create(createUserDto: CreateUserDto) {  
    // async await this.prisma.{
    // success: return "Added new users",
    // failure: return "Error unexpected new user not added."
    // }

    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
