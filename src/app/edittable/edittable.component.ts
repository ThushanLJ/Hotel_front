import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

export interface currentTable {
  id ? : number,
  tablesize?: string,
  description?: string
}

@Component({
  selector: 'app-edittable',
  templateUrl: './edittable.component.html',
  styleUrls: ['./edittable.component.css']
})
export class EdittableComponent implements OnInit {
  Edittable:FormGroup;
  TableId;


  constructor(private authService: AuthService,private router : Router) { 


  }


  ngOnInit() {
     this.Edittable=new FormGroup({
      tableno:new FormControl('',[Validators.pattern("^[0-9]*$")]),
      tablesize:new FormControl('',[ Validators.required,Validators.pattern("^[0-9]*$")]),
      description:new FormControl('',[ Validators.required]),
        });
  }


  logIn(credentials){
    
    const data = {
      "tableno": credentials.tableno,
      "tablesize":credentials.tablesize,
      "description":credentials.description,
    }

    
 console.log(data);
 this.authService.updateTable(this.TableId,data).subscribe(
    res=>{
      console.log(res);

    },err=>{
    console.log(err);
    }
  )

}

}