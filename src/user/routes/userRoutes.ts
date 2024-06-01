import { Router } from "express";
import { CreateUserController as CreateUserCtrl } from "../../modules/users/useCases/createUser/CreateUserController";
import { ListAllUsersController as ListAllUsersCtrl } from "../../modules/users/useCases/listAllUsers/listAllUsersController";

const CreateUserController = new CreateUserCtrl();
const ListAllUsersController = new ListAllUsersCtrl();

const userRoutes = Router();

userRoutes.post("/", CreateUserController.handle);
userRoutes.get("/", ListAllUsersController.handle);

export { userRoutes };
