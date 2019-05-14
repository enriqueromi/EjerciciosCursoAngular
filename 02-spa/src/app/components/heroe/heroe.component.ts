import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private acticatedRouter: ActivatedRoute,
                private _heroesService: HeroesService) {

    this.acticatedRouter.params.subscribe(params =>{
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })
   }

  ngOnInit() {
  }

}
