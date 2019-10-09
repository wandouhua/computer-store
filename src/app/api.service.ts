import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public  server = 'http://www.codeboy.com/'
  public  indexApi = this.server+'data/product/index.php'
  public  productListApi = this.server+'data/product/list.php'
  public  productDetailApi = this.server+'data/product/details.php'
  public  userLoginApi = this.server+'data/user/login.php'
  public  userRegisterApi = this.server+'data/user/register .php'
  
  constructor() { }
}
