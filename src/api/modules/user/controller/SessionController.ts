import { Request, Response } from "express";
import CreateSessionService from "../service/UserService";


export default class SessionController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const createSession = new CreateSessionService();

        const user = await createSession.createSessionUser({ email, password });

        return res.json(user).status(200);
    }
}
