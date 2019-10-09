import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from './api.service';

@Pipe({
  name: 'productDetail'
})
export class ProductDetailPipe implements PipeTransform {
//声明依赖Apiserve
  constructor(private api:ApiService){

  }

  transform(val){
    if(val){
   return val.replace(/src=\"img/g,'src="'+this.api.server+'img')
  }
 }

}
