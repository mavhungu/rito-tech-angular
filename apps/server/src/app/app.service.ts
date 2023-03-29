import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user/entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) 
    private readonly userRepo: Repository<User>,
  ) {}

  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  getAllUsers() {
    return this.userRepo.find();
  }

}