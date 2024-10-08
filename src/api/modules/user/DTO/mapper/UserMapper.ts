import cepUser from "../../service/model/cepUser";
import User from "../../typeorm/entities/User";
import axios from "axios";
import UserResponseDTO from "../response/UserResponseDTO";
import userService from "../../service/UserService";

class UserMapper {

    public async convertToEntityUser(user: User): Promise<UserResponseDTO | undefined> {
        const userReponseDTO = new UserResponseDTO();

        userReponseDTO.id = user.id;
        userReponseDTO.name = user.name
        userReponseDTO.cep = user.cep
        userReponseDTO.cpf = user.cpf
        userReponseDTO.birth = user.birth.toString();
        userReponseDTO.email = user.email;


         const data = await this.searchCepUser(user.cep)

            userReponseDTO.neighbordhood = data.bairro;
            userReponseDTO.street = data.logradouro;
            userReponseDTO.complement = data.complemento
            userReponseDTO.city = data.localidade
            userReponseDTO.uf = data.uf


        return userReponseDTO;


    }


    public async searchCepUser(cep: string) {

        try {
            console.log('to aquii')
            const endere = await axios.get<cepUser>(`https://viacep.com.br/ws/${cep}/json/`);
            console.log(endere)
            return endere.data;
        } catch (error) {
            throw new Error('Erro data cep')
        }
    }
}

export default UserMapper;