import { PassportStrategy } from "@nestjs/passport";
import { Model } from 'mongoose';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from "./jwt-payload.interface";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(@InjectModel('User') private userModel: Model<User>) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'test'
        });
    }

    async validate(payload: JwtPayload) {
        const { username } = payload;
        const user = await this.userModel.findOne({ username });
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}