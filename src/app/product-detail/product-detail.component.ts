import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  private product = {}  //商品数据
  @ViewChild('productSlides',{static:true})
  private productSlides

  constructor(private route:ActivatedRoute,private nav:NavController,private http:HttpClient,private api:ApiService) { }

  ngOnInit() {
    //组件初始化完成后
    //①读取路由参数
    this.route.params.subscribe((data)=>{
      let pid = data.pid
      //②根据pid异步请求服务器端商品数据
      this.http.get(this.api.productDetailApi+'?lid='+pid).subscribe((res:any)=>{
        // console.log('得到了路由参数lid')
        this.product=res.details
        console.log(this.product)
        this.productSlides.startAutoplay()
      })
    })   
  }
  goBack(){
    //回退到历史纪录的上一个页面
    this.nav.back()
  }

}
