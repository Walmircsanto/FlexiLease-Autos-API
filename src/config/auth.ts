import dotenv from "dotenv";
import * as process from "node:process";
dotenv.config();

export default {
    jwt: {
        secret: String(process.env.JWT_SECRET),
        expiresIn: String(process.env.JWT_EXPIRE_IN),
    },
};
