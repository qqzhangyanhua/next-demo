import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Data<T> {
  data: T;
}
@Injectable()
export class Response<T> implements NestInterceptor<T, any> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Data<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          code: 200,
          message: 'success',
          data,
          success: true,
        };
      }),
    );
  }
}
