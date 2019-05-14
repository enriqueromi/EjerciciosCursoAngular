import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
    <app-ng-style></app-ng-style>
    <br>
    
    <app-css></app-css>
    <br>
    
    <app-clases></app-clases>
    
    <br>

    <p [appResaltado]="'blue'">
        Hola mundo
    </p>

    <br>
    <app-ng-switch></app-ng-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  constructor() { 
    console.log("constructor");
  }
  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }


}
