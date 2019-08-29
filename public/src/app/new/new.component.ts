import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  NewPet: object;
  errors: object = {};

  constructor(
    private _http: HttpService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.NewPet= { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "", likes: 0 }
  }

  postPetFromService() {
    this._http.postPet(this.NewPet).subscribe(data => {
      console.log(data);
      if(data["errors"]){
        console.log("errors exsist")
        this.errors=data["errors"]
        console.log("this.errors:", this.errors)
      }
      else{
        console.log('no errors')
        this._router.navigate(['/pets'])
      }
    })
  }

}
