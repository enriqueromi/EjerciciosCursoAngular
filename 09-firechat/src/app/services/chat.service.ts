import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth, messaging } from 'firebase/app';

import { Mensaje } from '../interface/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: Mensaje[]= [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) { 

    this.afAuth.authState.subscribe( data =>{
      console.log('Estado del usuario ', data);
      
      if(!data){
        return;
      }
      this.usuario.nombre = data.displayName;
      this.usuario.uid= data.uid;

    })

  }

  login(proveedor:string) {
    
    if(proveedor==='google'){
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }else if(proveedor==='invitado'){
      this.usuario.nombre='invitado';
      this.usuario.uid='uidInvitado';
    }else{
      
      alert('Esta opcion todavia no esta disponible');
    }


    
  }
  logout() {
    this.usuario={};
    this.afAuth.auth.signOut();
  }

  cargarMensajes(){

    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=>ref.orderBy('fecha','desc').limit(10));

    return this.itemsCollection.valueChanges()
                                .pipe(map((mensajes:Mensaje[])=>{
                                  console.log(mensajes);
                                  this.chats= [];
                                  for (let mensaje of mensajes){
                                  this.chats.unshift(mensaje);
                                  }
                                }))
  }

  agregarMensajes(texto:string){
    
    let mensaje:Mensaje={
      nombre: this.usuario.nombre,
      mensaje:texto,
      fecha : new Date().getTime(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add(mensaje);

  }
}
