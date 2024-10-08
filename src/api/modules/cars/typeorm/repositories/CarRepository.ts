import {AppDataSource} from "@modules/typeorm/connection";
import Car from "../entities/Car"
import {Entity, Repository} from "typeorm";



export const CarRepository = AppDataSource.getRepository(Car).extend({
    async finById(id: number) {
        const car = await this.findOne({
            where: {id: id}
        });
        return car;
    }
})

