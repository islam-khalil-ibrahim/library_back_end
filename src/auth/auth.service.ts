import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  users = [
    { id: "1", pass: "12345" },
    { id: "2", pass: 123458 }
  ];

  constructor(private jwtService: JwtService) {}

  login(createAuthDto: CreateAuthDto) {

    const user = this.users.find((user) =>{return user.id === createAuthDto.id && user.pass === createAuthDto.pass});

    if (!user) {
      throw new UnauthorizedException('Invalid id or password');
    }

    const accessToken = this.jwtService.sign(
      {
        id: user.id,
      },
      {
        expiresIn: '7m',});

    const refreshToken = this.jwtService.sign(
      {id: user.id,},
      {expiresIn: '7d',});

    return {
      accessToken,
      refreshToken,
    };
  }
}
//   findAll() {
//     return `This action returns all auth`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} auth`;
//   }

//   update(id: number, updateAuthDto: UpdateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
// }
