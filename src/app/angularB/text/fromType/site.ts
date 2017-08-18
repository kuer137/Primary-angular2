/**
 * Created by admin on 2017/7/5.
 */
//模型类
export class keuerType {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public alexa?: number   //alexa 后添加一个问号(?)表示可选字段
  ){}
}
