

import UserRepository from "../typeorm/repositories/UserRepository";
import User from "../typeorm/entities/User";
import { sign } from "jsonwebtoken";
import AppError from "../../../shared/errors/AppError";
import authConfig from "@config/auth";
import cepUser from "./model/cepUser";
import UserMapper from "../DTO/mapper/UserMapper";




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

    public async createUser({name, cpf, birth, cep, email, password}: IRequest) {
        const userRepository = UserRepository;

        const userEmailExist = await userRepository.findByEmail(email);


        if (userEmailExist) {
            throw new AppError("user with this email already exists", "Bad Request", 400)
        }

        const user = userRepository.create({
            name,
            cpf,
            birth,
            cep,
            email,
            password
        });
        await userRepository.save(user)

        const useMapper = new UserMapper();

        const userResponse  = await useMapper.convertToEntityUser(user);
        console.log(userResponse)
        return userResponse;

    }

    public async createSessionUser({email, password}: IRequestauthenticateUser) {
        const userRepository = UserRepository;
        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new AppError("user not found", "Bad Request", 400)
        }

        const id = user.id.toString();

        console.log(authConfig.jwt.secret)
        console.log(authConfig.jwt.expiresIn)
        const token = sign({id}, authConfig.jwt.secret, {
            //to indicando que esse token vai ter validade de x dias/horas
            expiresIn: parseInt('1h'),
        });

        return {
            user,
            token,
        };

    }

    public verifyYear(){

    }
}
export default UserService;