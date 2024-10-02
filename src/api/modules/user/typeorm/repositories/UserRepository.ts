import { EntityRepository, Repository } from 'typeorm';
import User from "../entities/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {

    public async findByEmail(email: string){
        const user = await this.findOne({
            where:{ email }
        });
        return user
    }

}