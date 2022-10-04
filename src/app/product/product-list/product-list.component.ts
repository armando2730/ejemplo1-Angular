import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  constructor() { }

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  ngOnInit(): void {
  }
  productos:any[]=[
    {
      "productoId":1,
      "Modelo":'sentra',
      "Descripcion":'5 puertas',
      "year":'febrero 3 2020',
      "Precio":122000,
      "Marca":'Nissan',
      "Color":'Naranja',
      "Imagenurl":'https://th.bing.com/th/id/OIP.aYkw-HnFV2KNNtXUQAdJxAHaE8?pid=ImgDet&rs=1'
    },
    {
      "productoId":2,
      "Modelo":'A4',
      "Descripcion":'5 puertas',
      "year":'febrero 3 2020',
      "Precio":120000,
      "Marca":'Audi',
      "Color":'Gris',
      "Imagenurl":'https://th.bing.com/th/id/R.0fdf03317881eba07941bcbce66b3898?rik=EUE%2bIrUBTDYnMg&pid=ImgRaw&r=0'
    },
    {
      "productoId":3,
      "Modelo":'Kia Rio',
      "Descripcion":'5 puertas',
      "year":'febrero 3 2020',
      "Precio":127000,
      "Marca":'Kia',
      "Color":'Rojo',
      "Imagenurl":'https://th.bing.com/th/id/OIP.8duOVAZu8iFElZr_IYtcYgHaFO?pid=ImgDet&rs=1'
    }
  ]


}
