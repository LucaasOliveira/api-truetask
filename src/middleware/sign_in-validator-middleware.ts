import { NextFunction, Request, Response } from "express";
import { RequestError } from "../error/request.error";
import { ServerError } from "../error/server.error";

export class SignInValidatorMiddleware {
  public static signInValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email, password } = req.body;
      if (!email) {
        return RequestError.fieldNotProvided(res, "E-mail");
      }
      if (!password) {
        return RequestError.fieldNotProvided(res, "Senha");
      }

      next();
    } catch (error) {
      return ServerError.genericError(res, error);
    }
  }
}
