
import { Injectable, CanActivate, ExecutionContext, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as OktaJwtVerifier from '@okta/jwt-verifier';

@Injectable()
export class OktaGuard implements CanActivate, OnModuleInit {

  oktaJwtVerifier: any;

  onModuleInit() {
    this.oktaJwtVerifier = new OktaJwtVerifier({
      issuer: 'https://dev-68779385.okta.com/oauth2/default',
      clientId: '0oa1g0nu22CTjdz285d7',
      assertClaims: {
        'aud': ['api://default']
      }
    });
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const token = context.getArgs()[0]?.headers?.authorization.split(' ')[1];
    console.log("Token : ",token);
    //return true
    return this.oktaJwtVerifier.verifyAsPromise(token)
      .then((data) => {
        console.log("Data : ",data)
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}