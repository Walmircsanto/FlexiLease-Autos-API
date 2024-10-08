# FlexiLease-Autos-API 
## Descrição
Esta e uma API de gerenciamento de reservas de carros, foi utilizado as tecnologias TypeScript,nodeJs, express, TypeORM e Sqlite3 para desenvolver essa aplicação.

## 🛠️ Ferramentos Utilizadas  
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/SQLite.svg" width="50px"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/NodeJS-Dark.svg" width="50px"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/ExpressJS-Dark.svg" width="50px">
 <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TypeScript.svg" width="50px"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/MySQL-Light.svg" width="50px"> 

## Como executa o projeto
### Pré-requisitos
- Node: 20.12.2
- express: 4.19.2
- sqlite3: 5.1.7
- body-parser: 1.20.2
- jsonwebtoken: 9.0.2
- dotenv: 16.4.5
### Passo a Passo para Execução
#### 1. Clone o repositorio
```bash
 git clone https://github.com/Walmircsanto/FlexiLease-Autos-API.git
cd PetsClinic
```
### 2. Baixar as dependencias do packager.json
```Node
  npm install
```
### 3. Configure o banco de dados
edite o nome do arquivo .dot.env.exmaple para dot.env e adicione as suas credenciais de do banco de dados no arquivo  no arquivo dot.env ```dot.env ```
```javascript
#configuração - Banco de dados
USER=SEU_USER_DO_BD
PASSWORD=SUA_SENHA
HOST=HOST_DO_SEU_BD
DATABASE=NOME_DO_SEU_TADABASE
});
```
#### 3.1
A aplicação também utiliza arquivos de autenticação , então adicione a sua chave hash de assinatura e o tempos de expiração do token no arquivo ```dot.env```
```javascript{
# configuração do seu JWT token
JWT_SECRET=SEU_SIGNATURE
JWT_EXPIRES_IN=TEMPO_DO_SEU_TOKEN
});
```
### 4. Compile e Execute a aplicação
Na construção desse projeto foi utilizado a IDE WebStorm, mas você pode utiliza a IDE da sua preferencia

### 5. Acesse a API no Swagger
Utilizamos o Postman como nosso client, mas você pode utilizar outros da sua preferencia. 
## 🌐 Endpoints disponiveis da API
disponivel no na URL ```http://localhost:3000/v1```
- Cars
  - ``` POST /car``` : Criar um carro
  - ``` GET /car```: Lista todos os carros
  - ``` DELETE /car/:id ```: delete um carro
  - ``` PUT /car/:id ```: Atualizar um carro
  - ``` GET /car/id ```: Atualizar um pet
  - ``` GET /tutor/:id ``` : Busca um carro pelo id
 
  - Users
  - ``` POST /user``` : Criar um usuario

   - Reserve
  - ``` POST /reserve``` : Criar uma reserva
  

