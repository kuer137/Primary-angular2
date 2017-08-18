/**
 * 文本域
 * 从FiledBase继承出TextArea类
 */
import { FiledBase } from './field-base';

export class TextArea extends FiledBase<String>{
  controlType = 'textarea';
  row:number;
  constructor(options:{} = {}){
    super(options);
    this.row = options['rows'] || 1;
  }
}
