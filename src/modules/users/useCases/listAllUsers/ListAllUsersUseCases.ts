import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class ListAllUsersUseCases {
    async execute () : Promise<User[]> {
        //verificar se o usuário já existe
        const users = await prisma.user.findMany();
        return users;
    }
}