import { Request, Response } from "express";
import ReserveService from "../service/ReserveService";
import mapperReserve from "../mapper/mapperReserve";
export default class ReserveController {

    public async createReserve (req:Request,  res:Response){
        const {startDate, endDate,carId } = req.body;
        const idUSer = req.body.userId

        console.log(idUSer)

        const reserveService = new ReserveService();


        const reserve = await reserveService.createReserve(idUSer,{startDate, endDate,carId})


        return res.json( mapperReserve.requestReserveInResponse( reserve )).status(201);
    }

}