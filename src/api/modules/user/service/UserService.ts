
import { getCustomRepository } from 'typeorm';
import UserRepository from "../typeorm/repositories/UserRepository";
import User from "../typeorm/entities/User";
import { sign } from "jsonwebtoken";
import AppError from "../../../shared/errors/AppError";
import authConfig from "@config/auth";



interface IRequest {
    name:string,
    cpf:string,
    birth:Date,
    cep: string,
    email:string,
    password:string
}

interface IResponse {
    user: User;
    token: string;
}

interface  IRequestauthenticateUser{
    email:string,
    password:string
}

class UserService {

    public async createUser({name, cpf,birth, cep, email, password}: IRequest) {
        const userRepository = UserRepository;

        const userEmailExist = await userRepository.findByEmail(email);


        if (userEmailExist) {
           throw  new AppError("user with this email already exists", "Bad Request", 400)
        }

        const user = userRepository.create({
            name,
            cpf,
            birth,
            cep,
            email,
            password});

        await userRepository.save(user)
        return user;

    }

    public async userSession({email, password}: IRequestauthenticateUser){
        const userRepository = UserRepository;
        const user = await userRepository.findByEmail(email);

        if(!user){
            throw  new AppError("user not found", "Bad Request", 400)
        }


        const token = sign({}, authConfig.jwt.secret, {
            subject: user.id.toString(),
            //to indicando que esse token vai ter validade de x dias/horas
            expiresIn:parseInt(<string>authConfig.jwt.expiresIn),
        });

        console.log(token)

        return {
            user,
            token,
        };

    }

}

export default UserService;