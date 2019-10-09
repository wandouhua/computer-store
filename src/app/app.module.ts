import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailPipe } from './product-detail.pipe'
import {FormsModule} from '@angular/forms'

const routes=[
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-detail/:pid',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'**',component:NotFoundComponent},
]
 

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    UserLoginComponent,
    NotFoundComponent,
    ProductDetailPipe
  ],
  entryComponents: [],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, 
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule   //ngModel指令所在的模块
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  @ViewChild('mySlides',{static: true})
  private mySlides

  // ngOnInit(){
  //   //组件完成初始化之后，让轮播广告自动播放
  //   this.mySlides.startAutoplay()
  // }
  ngOnInit(){
    this.mySlides.startAutoplay()
  }
}
