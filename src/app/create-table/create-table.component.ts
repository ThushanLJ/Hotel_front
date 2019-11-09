import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';


@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css'],
})
export class CreateTableComponent implements OnInit {

  constructor(private authService: AuthService,private router : Router) { }

  ngOnInit() {
  }

  logIn(credentials){

    const data = {
      "tableno": credentials.tableno,
      "tablesize":credentials.tablesize,
      "description":credentials.description,
    }


 console.log(data);
 this.authService.addtable(data)
 .subscribe(res=>{
    console.log(res);
  },err=>{
  console.log(err);
  }

)

window.history.back();

  }


  CreateTable=new FormGroup({
    tableno:new FormControl('',[Validators.required]),
    tablesize:new FormControl('',[ Validators.required,Validators.pattern("^[0-9]*$")]),
    description:new FormControl('',[ Validators.required]),
    })
}
