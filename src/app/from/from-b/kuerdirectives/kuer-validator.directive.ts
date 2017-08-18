import { Directive , Input } from '@angular/core';
import { Validator , AbstractControl , NG_VALIDATORS } from '@angular/forms';
@Directive({  //自定义校验规则
  selector:'[kuerDataEqual]',
  providers:[
    { provide:NG_VALIDATORS, useExisting:EqualValidator,multi:true }
  ]
})
export class EqualValidator implements Validator{
  @Input()kuerDataEqual:string;
  @Input()firstPass:boolean;  //判断是否是第一个数据密码的框
  constructor(){}
  validate(control:AbstractControl):{[key:string]:any}{
    //当前空间的值(当前输入的值)
    let selfValue = control.value;
    console.log('selfValue:'+selfValue);
    //需要比较的控件，根据属性名获取
    let targetControl = control.root.get(this.kuerDataEqual);
    //校验的逻辑
    if(targetControl && selfValue !==targetControl.value){
      if(!this.firstPass){
        return{
          kuerDataEqual:false
        }
      }else{
        targetControl.setErrors({
          kuerDataEqual:false
        })
      }
    }else{  //符合校验规则，清空错误信息
      targetControl.setErrors(null);
    }
    return null;
  }
}
