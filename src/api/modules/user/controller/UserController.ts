import {Request, Response} from 'express';
import UserService from "../service/UserService";

export default class UserController {

    public async createUser(req: Request, res: Response) {
        const {name, cpf, birth, cep, email, password} = req.body

        const userService = new UserService();

        const user = await userService.createUser({name, cpf, birth, cep, email, password})
        return res.status(201).json(user);
    }

    public testeStringToken(req: Request, res: Response) {

        const {idUser} = req.body
        console.log(req.body)
        return res.json("Deu certoo")
    }
}