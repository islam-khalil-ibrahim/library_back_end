import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const isAdmin = request.headers['x-admin'];

    if (isAdmin !== 'true') {
      throw new ForbiddenException('Only admins can access this route');
    }
    return true;
  }
}