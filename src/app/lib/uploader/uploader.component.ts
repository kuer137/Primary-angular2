import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  // B: 初始化定义uploader变量,用来配置input中的uploader属性
  uploader:FileUploader = new FileUploader({
    url: "http://www.download.com:80/uploadFile",
    method: "POST",
    itemAlias: "uploadedfile"
  });

  selectedFileOnChanged(event:any) {
    // 这里是文件选择完成后的操作处理
    console.log("上传完成：6")
    console.log(event.target.value,9999)
  }

  selectedFileOnChanged1(){
    this.uploader.queue[0].onSuccess = (response, status, headers) => {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        let tempRes = JSON.parse(response);
        console.log("文件上传成功")
      }else {
        // 上传文件后获取服务器返回的数据错误
        let tempRes2 = JSON.parse(response);
        console.log("文件上传失败："+tempRes2);
      }
    };
    this.uploader.queue[0].upload(); // 开始上传
  }



}
