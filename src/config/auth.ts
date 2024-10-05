import dotenv from "dotenv";
import * as process from "node:process";
dotenv.config();

export default {
    jwt: {
        secret:process.env.JWT_SECRET || "assinatura",
        expiresIn: process.env.JWT_EXPIRES || 1,
    },
};
