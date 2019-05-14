import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html'
})
export class SearchHeroeComponent implements OnInit {

  heroes: any[] = [];
  termino: String;
  encontrado :boolean = false;


  constructor( private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.termino= params['termino'];
      this.heroes = this._heroesService.buscarHeroe( params['termino']);
      console.log(this.heroes);
      if(this.heroes.length <=0){
        // this.router.navigate(['heroes'])
        this.encontrado = true;
      }
      else{
        this.encontrado = false;
      }

    })
  }
  // verHeroes(idx:number){
  //   this.router.navigate(['/heroe',idx]);
  // }
}
