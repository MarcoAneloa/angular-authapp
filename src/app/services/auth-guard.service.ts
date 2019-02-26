import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate } from '@angular/router';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService:AuthService) { 
  }

  canActivate( next:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(next);
    if(this.authService.isAuthenticated()){
      console.log("Paso el guard");
      return true;
    }else{
      console.log("Bloqueado el guard");
      return false;
    }
  }

}
