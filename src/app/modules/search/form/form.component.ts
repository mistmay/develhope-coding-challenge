import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  //Form Group
  form = new FormGroup({
    name: new FormControl('' , [Validators.minLength(1), Validators.required] )
  });

  constructor(private apiNames:ApiService) { }
  nameData:any;

  
  ngOnInit(): void {
    this.nameData = this.apiNames.getName().subscribe((data) => console.log(data));
  }


// sendName(){
//   console.warn(this.form.value)
// }

}
