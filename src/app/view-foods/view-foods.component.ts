import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuService } from './../services/menu.service';
import { menus } from './../models/menues';

@Component({
  selector: 'app-view-foods',
  templateUrl: './view-foods.component.html',
  styleUrls: ['./view-foods.component.css'],
  providers:[AuthService]
})
export class ViewFoodsComponent implements OnInit {
  menus: menus [];

  constructor( private authService: AuthService,private menuService:MenuService,private location: Location,private router : Router ){}

  ngOnInit() {
    this.menuService
    .displayitems()
      .subscribe((res)=>{
        this.menus = res.json();
        console.log('response is',this.menus);
      },(error) =>{
        console.log('error is',error)
      });
  }

  edititem(_id){
    console.log("add");
    this.router.navigate(['/edititem',_id]);
  }

  removeitem (_id){

    console.log(_id);
    //console.log(typeof _id);
    this.menuService.removeitem(_id)
    .subscribe(res=>{
      console.log(res);
      window.location.reload();
    })

  }


}
