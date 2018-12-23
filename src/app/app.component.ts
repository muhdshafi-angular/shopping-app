import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '../../node_modules/@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authSrevice: AuthService,
              router: Router,
              private userService: UserService) {
    authSrevice.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');
        if (returnUrl) {
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      }
    });
  }
}
