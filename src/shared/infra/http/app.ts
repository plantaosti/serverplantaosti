import "reflect-metadata";
import "@shared/container";
import "express-async-errors";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { routes } from "./routes";

const app = express();
// app.use(cors(
//   origin: `${process.env.PUBLIC_SITE_URL}` || 'http://localhost:3000'
// ));

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
