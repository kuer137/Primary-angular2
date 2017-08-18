import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators} from '@angular/forms';  //引入angular2 form插件
import { user } from '../model/kuer-model';

@Component({
  selector: 'app-from-b',
  templateUrl: './from-b.component.html',
  styleUrls: ['./from-b.component.scss']
})
export class FromBComponent implements OnInit {
  public kuerForms:FormGroup;
  public userIngo ={
    'userName':'kueraaaa',
    'nickName':'',
    'email':'',
    'password':'',
    'confirmPassword':'',
    'formError':'',
    'vcode':''
  };

  //存储错误信息
  public formErrors = {
    'userName':'',
    'nickName':'',
    'email':'',
    'password':'',
    'confirmPassword':'',
    'formError':'',
    'vcode':''
  };

  //错误对应的提示
  public validationMessages = {
    'userName':{
      'required':'用户名必须输入。',
      'minlength':'用户名4到32个字符。'
    },
    'nickName':{
      'required':'昵称必须输入。',
      'minlength':'昵称2到32个字符。'
    },
    'email': {
      'required': '邮箱必须输入。',
      'pattern': '请输入正确的邮箱地址。'
    },
    'password': {
      'required': '密码必须输入。',
      'minlength': '密码至少要8位。'
    },
    'confirmPassword': {
      'required': '重复密码必须输入。',
      'minlength': '密码至少要8位。',
      'kuerDataEqual': "两次输入的密码不一致。"
    },
    'vcode': {
      'required': '验证码必须输入。',
      'minlength': '4位验证码',
      'maxlength': '4位验证码'
    }
  };

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.kuerBForm();
  }

  kuerBForm():void{
    this.kuerForms = this.fb.group({
      //每一个input都是一个FormControl,key是formControlName,value是构建FormControl的参数，
      // 第一个参数是input的默认值，第二个参数是校验器数组
      'userName':[
        this.userIngo.userName,//默认值
        [   //校验器数组
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ]
      ],
      'nickName':[
        this.userIngo.nickName,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32)
        ]
      ],
      "email": [
        this.userIngo.email,
        [
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ]
      ],
      "password": [
        this.userIngo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      "confirmPassword": [
        this.userIngo.confirmPassword,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      "vcode": [
        this.userIngo.vcode,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ]
      ]
    });

    this.kuerForms.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  };

  //值改变是的操作
  onValueChanged(data?: any):void{
    console.log(data,"数据change监听");
    if(!this.kuerForms){
      return;
    };
    const form = this.kuerForms;
    for(const field in this.formErrors){
      this.formErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){  //获取存在值的。并且值改变的。并且不匹配验证的
        const messages = this.validationMessages[field];  //找到不匹配信息
        for(const key in control.errors){  //遍历不匹配信息，把错误信息赋值到formErrors的相对应位置
          this.formErrors[field]+= messages[key]+'';
        }
      }
    }
  }

}
