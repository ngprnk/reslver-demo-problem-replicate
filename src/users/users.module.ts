import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserResolver } from './users.resolver';

@Module({
  controllers: [UsersController],
  providers: [UserResolver]
})
export class UsersModule {}
