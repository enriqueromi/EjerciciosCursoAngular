import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  
  usuario:any ={
    nombre:null,
    apellido:null,
    correo:null,
    pais:"",
    sexo:""
  }
  paises= [{
    codigo:"ES",
    nombre: "España",
  },
  {
    codigo:"CRI",
    nombre:"Costa Rica"
  }]
  

  constructor() { 
    
  }

  ngOnInit() {
  }

  guardar( forma:NgForm){
    console.log("ngForm ",forma);
    console.log("Valor", forma.value);

    console.log("Usuario", this.usuario)
  }

}
