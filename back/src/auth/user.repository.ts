import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async signUp(createUserDto: CreateUserDto): Promise<void>  {
        const { username, password, firstname, lastname } = createUserDto;
        const user = new User();

        user.username = username;
        user.password = password;
        user.firstname = firstname;
        user.lastname = lastname;

        await user.save();
    }
}
