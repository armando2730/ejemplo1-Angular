import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1="";
  num2="";
  num3="";
  res:number=0;
  imprimir='';
  texto:string[]=[];
  resultado:number=0;
sumar(){
  this.res=parseInt(this.num1)+parseInt(this.num2);
}
multiplicar(){
  let numero:number = parseInt(this.num3);
  let texto : string[]=[];
for(let i=1; i<=10; i++){
  this.resultado= numero*i;
  texto.push(i+'x'+numero+'='+this.resultado);

}
this.texto=texto;
}

  constructor() { }

  ngOnInit(): void {
  }

}
