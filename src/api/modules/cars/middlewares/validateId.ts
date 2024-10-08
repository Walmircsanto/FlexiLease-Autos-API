import { Request, Response, NextFunction } from "express";
import AppError from "../../../shared/errors/AppError";


function validateId(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params;


    if (isNaN(Number(id))) {
        // Retorna um erro 400 se o ID não for um número
        throw new AppError('Invalid ID format. ID must be a number.', 'Bad Request', 400);
    }

    next();
}

export default validateId;
