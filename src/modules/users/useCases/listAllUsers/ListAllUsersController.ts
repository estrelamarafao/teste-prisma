import { Request, Response } from 'express';
import { ListAllUsersUseCases } from './ListAllUsersUseCases';


export class ListAllUsersController {
    async handle (request : Request, response : Response){
        const {name, email} = request.body;

        const listAllUsersUseCases = new ListAllUsersUseCases();

        const result =  await listAllUsersUseCases.execute();
        return response.status(200).json(result);
        
    }
}