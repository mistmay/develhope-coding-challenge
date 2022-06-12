
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  //Form Group
  form = new FormGroup({
    name: new FormControl('' , [Validators.required,] ) // 
  });
  get n(){
    return this.form.get('name');
  }
  
  constructor() { }
  nameData?:any;
  name?:string;

  ngOnInit(): void {
    
   
  }
//Prende il valore inserito nel form e lo inserisce nella variabile name
getName():void{
  if(!this.form.valid){
    return; 
  }
  else{
    return this.name = this.form.controls['name'].value;

  } 
}




}
