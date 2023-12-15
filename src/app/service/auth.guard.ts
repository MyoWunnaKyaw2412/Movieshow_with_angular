import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
export const authGuard: CanActivateFn = (route, state) => {
  const myroute : Router = inject (Router);
  const cookieService:CookieService = inject(CookieService);
  if (cookieService.get('token')){
    return true;
  }else{
    myroute.navigateByUrl('login')
    return false;
  }
  
};