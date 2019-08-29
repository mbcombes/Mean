import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  petId: string;
  onePet: object = {};
  disabled: boolean = true;
  editPet: object = {};

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.petId = params["id"]
      console.log(this.petId)
      this.getOnePetFromService();
    })
  }

  getOnePetFromService() {
    this._http.getOnePet(this.petId).subscribe(data => {
      console.log(data)
      this.onePet=data['Pets'];
      console.log("onePet:", this.onePet)
    })
  }

  deletePet() {
    this._http.deletePet(this.petId).subscribe(data => {
      console.log(data)
      this._router.navigate(['/pets'])
    })
  }

  addLike() {
    console.log(this.onePet)
    console.log(this.onePet[0]['likes'])
    this.onePet[0]['likes'] +=1;
    console.log(this.onePet[0]['likes'])
    this.disabled=false;
    this.editPet['name']=this.onePet[0]['name'];
    this.editPet['type']=this.onePet[0]['type'];
    this.editPet['description']=this.onePet[0]['description'];
    this.editPet['skill1']=this.onePet[0]['skill1'];
    this.editPet['skill2']=this.onePet[0]['skill2'];
    this.editPet['skill3']=this.onePet[0]['skill3'];
    this.editPet['likes']=this.onePet[0]['likes']
    this._http.putPet(this.petId, this.editPet).subscribe(data => {
      console.log(data);
      if(data['errors']){
        console.log('errors detected')
      }
      else{
        console.log("no errors")
      }
    })
  }

}
