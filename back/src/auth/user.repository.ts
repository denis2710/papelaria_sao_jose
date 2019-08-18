import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async signUp(createUserDto: CreateUserDto): Promise<void>  {
        const { username, password, firstname, lastname, isadmin } = createUserDto;
        const user = new User();

        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        user.firstname = firstname;
        user.lastname = lastname;
        user.isAdmin = isadmin;

        try {
            await user.save();
        } catch (error) {
            if (error.errno === 19) {
                throw new ConflictException('Usuario já cadastrado');
            }
            throw new InternalServerErrorException();
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

    async validateUserPassword(autCredentialsDto: AuthCredentialsDto): Promise<User> {
        const { username, password } = autCredentialsDto;
        const user = await this.findOne({ where : { username }, select: ['password', 'salt', 'username', 'isAdmin']}) ;

        if (user && await user.validadePassword(password)) {
            return user;
        }
    }

}
