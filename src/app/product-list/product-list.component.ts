import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  //获取模型数据
  private  productList=[]  //商品列表
  private pno=0 //加载的第几页数据
  private hasMore = true //还有更多数据可供加载吗
//使用了“ngIf” 就不再是静态组件了
  @ViewChild('myInfiniteScroll',{static:false})
  private myInfiniteScroll
  
  constructor(private nav:NavController,private http:HttpClient,private api:ApiService) { }
  ngOnInit(){
    //组件初始化完成，立即加载第一页的数据  
    this.loadData()
  }
  loadData(){
    this.pno++
    this.http.get(this.api.productListApi+'?pno='+this.pno).subscribe((res:any)=>{
      // console.log('异步请求到了商品列表数据')
      // console.log(res)
      this.productList = this.productList.concat(res.data)
      console.log(this.productList)
      //隐藏“无限滚懂组件”
      this.myInfiniteScroll.complete()
      //判断还有更多数据加载吗
      if(this.pno == res.pageCount){
         console.log("已经没有更多数据可供加载了")
         this.hasMore = false
      }

    })
  }
  goBack(){
    //回退到历史纪录的上一个页面
    this.nav.back()
  }
 
}
