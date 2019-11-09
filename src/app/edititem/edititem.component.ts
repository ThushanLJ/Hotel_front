import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms' ;
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { menus } from './../models/menues';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  menus: menus[];

  public url;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL:Observable<String>

  constructor(private afStorage: AngularFireStorage,private menuService:MenuService, private router : Router) { }

  ngOnInit() {
  }

  upload(event){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL=this.ref.getDownloadURL())
    )
    .subscribe(

    );
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.url = url;
          console.log(url)
        });
      })
    ).subscribe();
   }

  logIn(credentials){

    const data = {

      "itemname":credentials.itemname,
      "itemprice":credentials.itemprice,
      "photoUrl":this.url,
    }

 console.log(data);
 this.menuService.updateitem(data)
 .subscribe(res=>{
    console.log(res);
  },err=>{
  console.log(err);
  }

)

 //window.history.back();

  }


  edititem=new FormGroup({
    itemname:new FormControl('',[ Validators.required]),
    itemprice:new FormControl('',[ Validators.required]),
    })
}


