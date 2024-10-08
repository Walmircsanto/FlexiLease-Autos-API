import {AppDataSource} from "@modules/typeorm/connection";
import Reservation from "../entities/reserve";


export const ReserveRepository = AppDataSource.getRepository(Reservation)