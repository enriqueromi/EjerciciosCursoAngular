import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Mensaje } from 'src/app/interface/mensaje.interface';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string ="";
  elemento: any;
  elementoMensaje: any;

  constructor( public _cs: ChatService) {

    this._cs.cargarMensajes().subscribe(()=>{
      setTimeout(() => {
        this.elemento.scrollTop= this.elemento.scrollHeight;
      }, 20);
    });

   }

   ngOnInit(){
     this.elemento = document.getElementById('app-mensaje');
     this.elementoMensaje = document.getElementById('textMensaje');

   }

  enviar_mensaje(){
    console.log(this.mensaje);

    if(this.mensaje.length ===0){
      return;
    }
    this._cs.agregarMensajes(this.mensaje)
              .then(()=>{
                console.log('Mensaje Enviado');
                this.mensaje="";
              })
              .catch((err)=>console.error('Error no se pudo mandar el mensaje',err));
  }

}
