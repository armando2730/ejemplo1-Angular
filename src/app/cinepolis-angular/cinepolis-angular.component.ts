import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis-angular',
  templateUrl: './cinepolis-angular.component.html',
  styleUrls: ['./cinepolis-angular.component.css']
})
export class CinepolisAngularComponent implements OnInit {


myimage:string= "assets/images/img.png";
name="";
numb=0;
nump=0;
mensaje="";
tar=0;
 
 taqui(){
  let costo =12;
  let boleMax=this.nump*7;
  let total;
  if(this.numb<=boleMax){
    total=this.numb*costo
    if(this.numb>5){
      total=total-(total*.15);
    }else if(this.numb >= 3 ){
      total=total-(total*.10);
    }
    if(this.tar==1){
      total=total-(total*.10);
    }
    this.mensaje="Total a pagar"+total;
  }else{
    this.mensaje= "solo pueden comprar 7 por persona" + boleMax;
  }
 }
 
  constructor() { }

  ngOnInit(): void {
  }

}
