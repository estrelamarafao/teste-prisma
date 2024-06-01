import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from '../../dtos/CreateUserDTO';

// Rest of the code...

export class CreateUserUseCases {
    async execute ({name, email} : CreateUserDTO) : Promise<User> {
        //verificar se o usuário já existe
        const UserAlreadyExists = await prisma.user.findUnique({
            where:{
                email
            },
        });

        if (UserAlreadyExists) {
        }

        //criar usuário
        const user = await prisma.user.create({
            data:{
                name,
                email,
            },
        });

        return user;
    }
}