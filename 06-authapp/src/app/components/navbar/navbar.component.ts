import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  
  constructor( public auth: AuthService) {
    auth.handleAuthentication();
   }

   ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
  }

  login(){
    this.auth.login();
    console.log()
  }

  salir(){
    this.auth.logout();
  }

}
