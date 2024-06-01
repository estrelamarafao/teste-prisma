import { Request, Response } from 'express';
import { CreateUserUseCases } from "./CreateUserUseCases";


export class CreateUserController {
    async handle (request : Request, response : Response){
        const {name, email} = request.body;

        const createUserUseCases = new CreateUserUseCases();

        const result =  await createUserUseCases.execute({name, email});
        return response.status(200).json(result);
        
    }
}

