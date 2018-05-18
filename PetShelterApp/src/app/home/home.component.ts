import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  pets=[];

  constructor(private _route: ActivatedRoute, private petservice: PetService) { }

  ngOnInit() {
    this.ShowAll();
  }

  ShowAll(){
    let observable = this.petservice.getPets();
    observable.subscribe(data => {;
      this.pets = Object.values(data);
    });
  }
}