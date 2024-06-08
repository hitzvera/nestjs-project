import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    new Logger().error(
      `Request: ${new Date().toISOString()} ${req.method} ${req.url}`,
    );
    next();
  }
}
