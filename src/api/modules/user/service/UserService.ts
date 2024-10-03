
import { getCustomRepository } from 'typeorm';
import UserRepository from "../typeorm/repositories/UserRepository";
import User from "../typeorm/entities/User";
import { sign } from "jsonwebtoken";
import AppError from "../../../shared/errors/AppError";
import authConfig from "@config/auth";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


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
        const userRepository = getCustomRepository(UserRepository);

        const userEmailExist = await userRepository.findByEmail(email);

        if (!userEmailExist) {
           throw  new AppError("user with this email already exists", "Bad Request", 400)
        }

        const user = userRepository.create({
            name,
            cpf,
            birth,
            cep,
            email,
            password});

        await userRepository.save(user);
        return user;

    }

    public async userSession({email, password}: IRequestauthenticateUser){
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findByEmail(email);

        if(!user){
            throw  new AppError("user not found", "Bad Request", 400)
        }

        const token = sign({}, authConfig.jwt.secret, {
            subject: user.id,
            //to indicando que esse token vai ter validade de 1 dia
            expiresIn: authConfig.jwt.expiresIn,
        });

        return {
            user,
            token,
        };

    }

    public async authenticateUser(request: Request,
                                  response: Response,
                                  next: NextFunction) {
        const authHeader = request.headers.authorization;

        console.log(authHeader);
        if (!authHeader) {
            throw new AppError("JWT token is missing", "Bad Request", 400, );
        }

        // indico que a primeira posição não desejo pegar, e a segunda e o meu token
        // Bearer diasohdasdojnisahdikansdlk
        const [, token] = authHeader.split(" ");

        try {
            // esse metodo pega o token, e a chave hash que foi especificada, verificando se esse token foi
            // criado com essa secret
            const decodeToken = verify(token, authConfig.jwt.secret);

            return next();
        } catch {
            throw new AppError("Invalid Token", "Bad Request", 400);
        }

    }
}