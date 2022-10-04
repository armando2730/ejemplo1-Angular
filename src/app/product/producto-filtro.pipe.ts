import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';
@Pipe({
  name: 'productoFiltro'
})
export class ProductoFiltroPipe implements PipeTransform {

  transform(value: IProduct[], args:string): IProduct[]
   {let filter:string=args? args.toLocaleLowerCase():'';
    return filter ? value.filter((product:IProduct)=>
      product.Marca.toLocaleLowerCase().indexOf(filter)!= -1): value;
  }

}
