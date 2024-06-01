import Express from "express";
import "express-async-errors";
import { routes } from "./user/routes";

const app = Express();

app.use(Express.json())

app.use(routes);

app.listen(8080, () => console.log("server is rinning in port 8080"));


