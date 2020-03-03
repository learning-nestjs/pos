import { Controller, Post, ValidationPipe, Body } from '@nestjs/common';
import { AuthCredentailDto } from './dto/auth-credential.dto';
import { User } from './user.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/signup')
    signup(@Body(ValidationPipe) authcredentialDto: AuthCredentailDto): Promise<User> {
        return this.authService.signup(authcredentialDto);
    }

    @Post('/signin')
    signin(@Body(ValidationPipe) authcredentialDto: AuthCredentailDto): Promise<{ accessToken: string }> {
        return this.authService.signin(authcredentialDto);
    }

}
