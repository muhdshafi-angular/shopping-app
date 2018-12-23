import { Injectable } from '@angular/core';
import { CanActivate } from '../../../node_modules/@angular/router';
import { AuthService } from './auth.service';
import { map, switchMap } from '../../../node_modules/rxjs/operators';
import { UserService } from './user.service';
import { AngularFireObject } from '../../../node_modules/@angular/fire/database';
import { AppUser } from '../model/app-user';
import { Observable, observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate() {
    // Hard codeded for now
    // should check the DB and return value
    return true;
  }

}
