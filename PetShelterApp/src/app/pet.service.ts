import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private _http: HttpClient) {}

  getPets(){
    return this._http.get('/Pets');
  }
  getPet(id){
    return this._http.get('/Pets/'+id);
  }
  newPet(newPet){
    return this._http.post('/Pets', newPet);
  }
  editPet(editPet){
    return this._http.put('/Pets/'+ editPet._id, editPet);
  }
  deletePet(id){
    return this._http.delete('/Pets/'+id);
  }

}