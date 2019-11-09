import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuService } from './../services/menu.service';


@Component({
  selector: 'app-resturentowner',
  templateUrl: './resturentowner.component.html',
  styleUrls: ['./resturentowner.component.css'],
  providers:[AuthService]
})
export class ResturentownerComponent implements OnInit {
  public tables;
  public menus;

  constructor( private authService: AuthService,private menuService:MenuService,private location: Location,private router : Router ){}
  

  ngOnInit() {
    this.authService
      .displayTables()
         .subscribe((res)=>{ 
          this.tables = res.json();   
        console.log('response is ',this.tables);

    },(error) => {
        console.log('error is ', error)
    });

    this.menuService
       .displayitems()
         .subscribe((res)=>{
           this.menus = res.json();
           console.log('response is',this.menus);
         },(error) =>{
           console.log('error is',error)
         });



  
  }

  createTable(){
    console.log("add");
    this.router.navigate(['createtable']);
  }


  removeTable (_id){
    
    console.log(_id);
    //console.log(typeof _id);
    this.authService.removeTable(_id)
    .subscribe(res=>{
      console.log(res);
      window. location.reload();
    })
     
  }

  editTable(){
    console.log("edit");
    this.router.navigate(['edittable']); 

  }

  additem(){
    console.log("add");
    this.router.navigate(['additems']);
  }

  removeitem (_id){
    
    console.log(_id);
    //console.log(typeof _id);
    this.menuService.removeitem(_id)
    .subscribe(res=>{
      console.log(res);
      window. location.reload();
    })
     
  }

  


}
  

