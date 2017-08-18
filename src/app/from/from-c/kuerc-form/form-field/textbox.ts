/**
 *文本类
 * 从FiledBase继承出TextBox类
 */

import { FiledBase } from './field-base';

export class TextBox extends FiledBase<string>{
  controlType = 'textbox';
  type:string;
  constructor(options:{} = {}){
    super(options);
    this.type = options['type'] || '';
  }
}

