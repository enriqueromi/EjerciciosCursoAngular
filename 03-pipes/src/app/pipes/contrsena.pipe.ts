import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrsenaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): any {

    let contrasena = value;
    if(activar ){
      return contrasena.replace(/./g,"*")
    }
    else{
      return contrasena;
    }
  }

}
