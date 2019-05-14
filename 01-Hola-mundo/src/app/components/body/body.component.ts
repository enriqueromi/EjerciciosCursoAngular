import{  Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
  

    mostrar:boolean = true;

    frase: any ={
        mensaje : 'Esto es una frase en el body',
        autor:'Enrique Rojas'
    }

    personajes : string[] = ['Per1', 'Per2', 'Per3'];
}