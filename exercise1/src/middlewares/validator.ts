import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import { BadRequest } from "../error/BadRequest";

export function validateReqQuery(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.query);
    if (error) {
      next(new BadRequest(error.message));
    }
    req.query = value;
    next();
  };
}
export function validateReqBody(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      next(new BadRequest(error.message));
    }
    req.body = value;
    next();
  };
}
