import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public _cs:ChatService) { }

  ngOnInit() {
  }


  ingresar( proveedor: string){
    console.log(proveedor);
    this._cs.login(proveedor);
  }


}
