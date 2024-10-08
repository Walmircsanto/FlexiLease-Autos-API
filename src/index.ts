import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import 'express';
import "express-async-errors";
import bodyParser from "body-parser";
import {AppDataSource} from './api/shared/typeorm/connection'
import routes from "./api/shared/routes";
import { errors } from "celebrate";
import AppError from "@modules/errors/AppError";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/v1', routes); // estou indicando que meu servidor vai usar essas rotas

app.use(errors()); // caso ocorra um erro na validação do celebrate, esse erro vai ser enviado para a aplicação por esse middlware

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.code).json({
            status: "error",
            message: error.message,
        });
    }

    return res.status(500).json({
        status: "error",
        message: " Internal server error",
    });
});


//inicializar o banco de dados
AppDataSource.initialize().then(r => {
    console.log("data source initialized in port");
}).catch((err) =>{
    console.log(err);
});

app.listen(3030,()=>{
    console.log("Server is running on port 3000");
})