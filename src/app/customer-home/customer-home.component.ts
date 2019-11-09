import { Component, OnInit } from '@angular/core';
import { MenuService } from './../services/menu.service';
import { menus } from './../models/menues';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  menus: menus [];
  noOfitems: number =1

  order_details={
    itemName:'',
    itemPrice: 0
  }

  order = {
    data: []
  }
  marked: boolean = true;
  total: any = 0;

  constructor(private authService: AuthService,private menuService:MenuService,private router : Router) { }

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


  cartAdd(itemname,itemprice,quantity){

    this.total = this.total + itemprice*quantity

     this.order.data.push({itemName:itemname,itemPrice:itemprice,quantity:quantity})

     console.log(this.total)
  }

  viewCart(){
    this.marked = false
  }

  backMenu(){
    this.marked = true
  }


  sendOrder(){
    this.menuService.sendOrder(this.order.data).subscribe(
      res=>{
        console.log(res)
      }
    )
  }

}
