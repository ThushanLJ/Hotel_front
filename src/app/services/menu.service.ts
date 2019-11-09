import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Contact } from '../log-in/contatct';
import { menus } from './../models/menues';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'content-Type': 'application/json' });
  private option = new RequestOptions({ headers: this.headers });




  displayitems() {
    return this.http.get(`http://localhost:3000/api/menu`);
  }


  removeitem(_id){
    return this.http.delete(`http://localhost:3000/api/menu/${_id}`)
  }

  additem(data){
    console.log(data)
    return this.http.post('http://localhost:3000/api/menu',data,{
      headers:this.headers
    })
  }

  updateitem(_id){
   return this.http.put(`http://localhost:3000/api/menu/${_id}`)
  }

  sendOrder(order){
    return this.http.post(`http://localhost:3000/api/menu`,order)
  }

}
