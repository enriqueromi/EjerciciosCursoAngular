import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { reject } from 'q';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  usuario:Object ={
    nombrecompleto:{
      nombre: "fernando",
      apellido: "herrera"
    },
    correo: "fernando.herrera85@gmail.com",
    pasatiempos: ["correr", "dormir", "comer"]
  }



  constructor() { 
  
    console.log(this.usuario);

  this.forma = new FormGroup({

    'nombrecompleto' : new FormGroup({

      'nombre': new FormControl('', [Validators.required  , Validators.minLength(3)]),
      'apellido': new FormControl('', [Validators.required, this.noHerrera])

    }),

    'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    'pasatiempos': new FormArray([new FormControl('correr', Validators.required)]),
    'username': new FormControl('', Validators.required, this.existeUsuario ),
    'password1': new FormControl('', Validators.required),
    'password2': new FormControl()

  })

  // this.forma.setValue(this.usuario);

  this.forma.controls['password2'].setValidators([
    Validators.required,
    this.noIgual.bind(this.forma)
  ])

  this.forma.controls['username'].valueChanges.subscribe(data =>{
    console.log(data);
  })
  this.forma.controls['username'].statusChanges.subscribe(data =>{
    console.log(data);
  })

  }

  agregarPasaTiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }


  noHerrera( controls:FormControl ): {[s:string]:boolean}{

    if(controls.value ==="herrera"){
      return{
        noHerrera:true
      }
    }
    return null;

  }
  noIgual( controls:FormControl ): {[s:string]:boolean}{

    let forma: any = this;

    if(controls.value !==forma.controls['password1'].value){
      return{
        noiguales:true
      }
    }
    return null;

  }

  existeUsuario(control: FormControl): Promise<any>| Observable<any>{
    let promesa = new Promise(
      (resolve ,reject) =>{
        setTimeout(()=>{
          if(control.value === "striter"){
            resolve({existe:true})
          }else{
            resolve(null)
          }
          
        },3000)
        
      }
    )
    return promesa;
  }


  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);
    // this.forma.reset(this.usuario)
    // this.forma.reset({
    //   nombrecompleto:{
    //     nombre: "",
    //     apellido: ""
    //   },
    //   correo: ""
    // })
  }

  ngOnInit() {
  }

}
