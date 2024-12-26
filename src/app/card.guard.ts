import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const cardGuard: CanActivateFn =
  (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);

    if (authService.hasRole('ADMIN')) {
      return true;
    } else {
      router.navigate(['forbidden']);
      return false;
    }
  };
