import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet={};
  editPet={};
  errors = {};
  liked = false;

  constructor(private route: Router, private _route: ActivatedRoute, private petservice: PetService) { }

  ngOnInit() {
    this.ShowOne();
  }

  ShowOne(){
    this._route.paramMap.subscribe( params => {
      let observable = this.petservice.getPet(params.get('id'));
      observable.subscribe(data => {
        this.pet = data;
        console.log(this.pet)
      })
    })
  }


  onLike(id){
    if(this.pet['_id'] == id){
      this.pet['likes'] += 1;
      
      let observable = this.petservice.editPet(this.pet);
      observable.subscribe(data => {
        if(data["errors"]){             
        }
        else{
          this.liked = true;
          //dissable like button
        }
      })
    }
  }

  onDelete(id){
    this.petservice.deletePet(id).subscribe(data => {
      this.route.navigateByUrl('/');
    })
  }
}
