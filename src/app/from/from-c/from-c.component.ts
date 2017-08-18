import { Component, OnInit ,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { FiledBase } from './kuerc-form/form-field/field-base';
import { TextArea } from './kuerc-form/form-field/textarea';
import { TextBox } from './kuerc-form/form-field/textbox';



@Component({
  selector: 'app-from-c',
  templateUrl: './from-c.component.html',
  styleUrls: ['./from-c.component.scss']
})
export class FromCComponent implements OnInit {
  @Input() fields:FiledBase<any>[] = [
    new TextBox({
      label:"用户名：",
      placeholder:"用户名",
    }),
    new TextArea({
      label:"留言：",
      placeholder:"留言"
    }),
    new TextBox({
      label:"密码：",
      placeholder:"请输入密码",
      type:"password"
    })
  ];
  public form:FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.fields)
    this.form = this.toFormGroup(this.fields);
  }

  toFormGroup(fields:FiledBase<any>[]){
    let group:any = {};
    fields.forEach(field => {
      group[field.key] = new FormControl(field.value || '')
    });
    return new FormGroup(group);
  }


}
