import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms' ;
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

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
 this.menuService.additem(data)
 .subscribe(res=>{
    console.log(res);
  },err=>{
  console.log(err);
  }

)

 window.history.back();

  }


  Additem=new FormGroup({
    itemname:new FormControl('',[ Validators.required,Validators.pattern("^[0-9]*$")]),
    itemprice:new FormControl('',[ Validators.required]),
    })
}


