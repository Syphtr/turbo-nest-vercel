import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
// import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<any> {
    return this.userService.createUser(userData);
  }
}
