import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interface/heroe.interface';
import {map} from 'rxjs/operators';





@Injectable()
export class HeroesService {

  fireURL: string ="https://heroesapp-2bcdf.firebaseio.com/heroes.json";
  heroeURL: string ="https://heroesapp-2bcdf.firebaseio.com/heroes/";

  constructor( private http : HttpClient) { 

  }


  nuevoHeroe( heroe:Heroe ){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post(this.fireURL, body , {headers}).pipe(map((data:any)=>{
      console.log(data);
      return data;
    }))
  }

  
  actualizarHeroe( heroe:Heroe, key$:string ){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    let url=`${this.heroeURL}/${key$}.json`;

    return this.http.put(url, body , {headers}).pipe(map((data:any)=>{
      console.log(data);
      return data;
    }))
  }


  getHeroe(key$: string ){
    let url= `${this.heroeURL}/${key$}.json`;
    return this.http.get(url).pipe(map(res=>res));
  }

  getHeroes(){
    return this.http.get(this.fireURL).pipe(map(res=>res))
  }

  borrarHeroe(key$:string){
    let url =`${this.heroeURL}/${key$}.json`;
    return this.http.delete(url).pipe(map(res=>res));
  }

}
