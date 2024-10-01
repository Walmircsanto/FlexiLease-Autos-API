import {DataSource} from "typeorm";
import dotenv from "dotenv";
import reflect from "reflect-metadata";
dotenv.config(); //carregar as informações do arquivo .env file

export const AppDataSource = new DataSource({
    type:"sqlite",
    // @ts-ignore
    host: process.env.HOST,
    port: 5000,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    entities: [], // indicando pro meu banco de dados quais entidades eu tenho
    logging: true
});
