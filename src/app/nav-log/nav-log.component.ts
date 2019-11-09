import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-log',
  templateUrl: './nav-log.component.html',
  styleUrls: ['./nav-log.component.css']
})
export class NavLogComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  viewitem(){
    console.log("add");
    this.router.navigate(['viewFoods']);
  };

  logout(){
    this.router.navigate(['home']);
  }
}
