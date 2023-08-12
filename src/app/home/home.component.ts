import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food:Foods[]=[];

  constructor(private fs:FoodService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      params =>{
        if(params['searchItem']){
          this.food=this.fs.getAll().filter
          (food =>food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));

        }
        else if(params['tag']){
          this.food= this.fs.geAllFoodbyTag(params['tag'])
        }
        else{
this.food=this.fs.getAll();
        }
      }
    )
   // this.food= this.fs.getAll();
  }

}
