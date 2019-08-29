import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  postPet(newPet: object){
    return this._http.post('/api/pets', newPet);
  }
  getAllPets(){
    return this._http.get('/api/pets')
  }
  getOnePet(id: string){
    return this._http.get(`/api/pets/${id}`)
  }
  deletePet(id: string){
    return this._http.delete(`/api/pets/${id}`)
  }
  putPet(id: string, editedPet: object){
    return this._http.put(`/api/pets/${id}`, editedPet)
  }
}
