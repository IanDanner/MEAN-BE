import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {


  duplicate = {};
  pet = {};
  editPet = {};
  errors = {};  

  constructor(private route: Router, private _route: ActivatedRoute, private petservice: PetService) { }

  ngOnInit() {
    this.ShowOne();
  }

  ShowOne(){
    this._route.paramMap.subscribe( params => {
      let observable = this.petservice.getPet(params.get('id'));
      observable.subscribe(data => {
        this.pet = data;
      })
    })
  }


  onEdit(editPet){
    let observable = this.petservice.editPet(editPet);
    observable.subscribe(data => {
      if(data["errors"]){        
        this.errors = data["errors"];
      }
      if(data["errmsg"]){
        this.duplicate = data;
      }
      else{
        this.route.navigateByUrl('/'+this.pet['_id']);
      }
    })      
  }

}
