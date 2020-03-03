import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: process.env.TOKEN_KEY || 'test',
      signOptions: {
        expiresIn: 63000
      }
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [
    JwtStrategy,
    PassportModule
  ]
})
export class AuthModule { }
