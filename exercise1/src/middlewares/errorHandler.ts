import { Request } from "../interface/auth";
import { NextFunction, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import { UnauthenticatedError } from "../error/Unauthenticated";
import loggerWithNameSpace from "../utils/logger";
import { BadRequest } from "../error/BadRequest";
const logger = loggerWithNameSpace("ErrorHandler");
export function notFoundError(req: Request, res: Response) {
  return res.status(HttpStatusCodes.NOT_FOUND).json({
    message: "Not found",
  });
}
export function genericErrorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.stack) {
    logger.error(error.stack);
  }
  if (error instanceof UnauthenticatedError) {
    return res.status(HttpStatusCodes.UNAUTHORIZED).json({
      message: error.message,
    });
  }
  if (error instanceof BadRequest) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      message: error.message,
    });
  }
  return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
  });
}
