import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  private uname =''
  private upwd = ''

  //声明依赖的服务对象
  constructor(
    private nav:NavController,
    private http:HttpClient,
    private api:ApiService,
    private alertController:AlertController ){ }

  ngOnInit() {}
  goBack(){
    //回退到历史纪录的上一个页面
    this.nav.back()
  }
  doLogin(){
    let body = `uname=${this.uname}&upwd=${this.upwd}`
    let options = {
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    } //可用于修改头部的选项对象
    this.http.post(this.api.userLoginApi,body,options).subscribe((res:any)=>{
      // console.log('获取到异步响应数据：登录的结果')
      // console.log(res)
      if(res.code==200){
        // alert('登录成功！')
        this.alertController.create({
          header:'登录结果',
          message:'欢迎回来:'+this.uname,
          buttons:['OK']
        }).then((dialog)=>{
          //对话框创建并挂载到DOM树完成，开始呈现它
          dialog.present()
        })
      }else{
        // alert('登录失败')
        this.alertController.create({
          header:'登录结果',
          message:'登录失败:'+this.uname,
          buttons:['OK']
        }).then((dialog)=>{
          //对话框创建并挂载到DOM树完成，开始呈现它
          dialog.present()
        })
      }
    })
  }
 

}
