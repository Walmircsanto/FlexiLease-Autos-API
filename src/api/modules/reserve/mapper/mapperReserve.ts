import RequestReserveDTO from "../dto/RequestReserveDTO";
import ResponseReserveDTO from "../dto/ResponseReserveDTO";
import Reserve from "../typeorm/entities/reserve";


export default  class mapperReserve {

    public static  requestReserveInResponse(reserveRequest:Reserve){
        const reserve = new ResponseReserveDTO()
        reserve.id = reserveRequest.id
        reserve.startDate = reserveRequest.startDate;
        reserve.endDate = reserveRequest.endDate;
        reserve.finalValue = 20
        reserve.userId = reserveRequest.user.id
        // @ts-ignore
        reserve.carId = reserveRequest.car.id

        return reserve;
    }
}