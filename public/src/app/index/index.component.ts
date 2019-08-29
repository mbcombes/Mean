import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  allPets: Array<object> = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getAllPetsFromService();
  }

  getAllPetsFromService() {
    this._http.getAllPets().subscribe(data => {
      console.log(data)
      this.allPets=data["Pets"];
      console.log("this.allPets:", this.allPets)
    })
  }
}
