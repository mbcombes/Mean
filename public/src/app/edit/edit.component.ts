import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  petId: string;
  editPet: object = {};
  onePet: object = {};
  errors: object = {};

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

    ngOnInit() {
      this.editPet= { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "", likes: 0 }
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
        this.editPet['name']=this.onePet[0]['name'];
        this.editPet['type']=this.onePet[0]['type'];
        this.editPet['description']=this.onePet[0]['description'];
        this.editPet['skill1']=this.onePet[0]['skill1'];
        this.editPet['skill2']=this.onePet[0]['skill2'];
        this.editPet['skill3']=this.onePet[0]['skill3'];
        this.editPet['likes']=this.onePet[0]['likes'];
        console.log("editPet",this.editPet)
      })
    }

    edit() {
      this._http.putPet(this.petId,this.editPet).subscribe(data => {
        console.log(data);
        if(data['errors']){
          console.log('errors detected')
          this.errors=data['errors']
        }
        else{
          console.log("no errors")
          this._router.navigate(['/pets', this.petId])
        }
      })
    }

}
