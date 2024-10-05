
import User from "../entities/User";
import {AppDataSource} from "@modules/typeorm/connection";

export const UserRepository = AppDataSource.getRepository(User).extend({
    async findByEmail(email: string) {
        const user = await this.findOne({
            where: {email}
        });
        return user;
    }
})

export default  UserRepository;