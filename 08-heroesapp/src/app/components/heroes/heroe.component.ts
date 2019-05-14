import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { Heroe } from '../../interface/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
@NgModule({
  imports:[
    FormsModule,
    NgForm
  ]
})
export class HeroeComponent implements OnInit {

  heroe: Heroe ={
    nombre: "",
    bio:"",
    casa:"Marvel"
  }

  nuevo: boolean = false;
  id:string;

  constructor(private router:Router , private _heroesService: HeroesService, private actRouter: ActivatedRoute) {

    this.actRouter.params.subscribe(parametros=>{ 
      
      this.id =parametros['id'];
      if(this.id!=="nuevo"){
        this._heroesService.getHeroe(this.id).subscribe((data:Heroe)=>this.heroe = data);
      }
    });
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);
    
    if(this.id =="nuevo"){
      this._heroesService.nuevoHeroe(this.heroe).subscribe(data=>{
        this.router.navigate(['/heroe',data.name])
        },error=> console.error(error));
    }else{
      this._heroesService.actualizarHeroe(this.heroe, this.id).subscribe(data=>{
        console.log(data);
        },error=> console.error(error));
    }
  }

  agregarNuevo(forma: NgForm){
    
    this.router.navigate(['/heroe','nuevo']);

    forma.reset({
      casa:"Marvel"
    });
  }

}
