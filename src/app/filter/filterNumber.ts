/**
 * Created by 酷儿 on 2017/6/11.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'fliternumber'
})

export class filterNumber implements PipeTransform{
  constructor(){}
  //管道方法
  transform(flag: string): string {
    return flag=='1' ? "text-danger":"";
  }
}
