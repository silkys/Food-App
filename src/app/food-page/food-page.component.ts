import { Component, OnInit } from '@angular/core';
import { Foods} from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { TagsComponent } from '../tags/tags.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Foods ;

  constructor(
    private activateRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activateRoute.params.subscribe((params) => {
      if (params['id']) {
        const foodId = Number(params['id']); // Convert the id to a number if it's not already
        this.food = foodService.getFoodById(foodId);
      }
    });
  }

  ngOnInit(): void {
  }
  addToCard(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page');
}

}
