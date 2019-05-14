import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';


import { AuthService } from './auth.service';
import { nsend } from 'q';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate( next: ActivatedRouteSnapshot , state:RouterStateSnapshot){

    console.log(next);
    console.log(state);

    if(this.auth.isAuthenticated()){
      console.log("Paso el guard")
      return true;
    }else{
      console.error("Bloqueado por el guard");
      return false;
    }
  }
}
