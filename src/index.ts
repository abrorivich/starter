import express, { Application } from "express";
import "dotenv/config"
import { usersRouter } from "@routes";
import { ErrorHandlerMiddleware } from "@middlewares";

const app: Application = express()
const PORT = process.env.APP_PORT || 7070

app.use(express.json())
app.use("api/user/", usersRouter)

app.use("/*", ErrorHandlerMiddleware.errorHandlerMiddleware)

app.listen(PORT, () => console.log(PORT))