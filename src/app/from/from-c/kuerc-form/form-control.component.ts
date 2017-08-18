import { Component,OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FiledBase } from './form-field/field-base';

@Component({
  selector:'form-control',
  templateUrl:'form-control.component.html'
})

export class FormControlComponent implements OnInit{
  @Input() field:FiledBase<any>;
  @Input() form:FormGroup;

  constructor(){};
  ngOnInit(){}
}
