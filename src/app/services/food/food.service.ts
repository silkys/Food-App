import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food=>food.id ==id)!;
  }
  getAll():Foods[] {
    return [
      {
        id:1,
        name:'Pastries',
        cookTime :'10-20',
        price: 50,
        favorite:false,
        origins: ['London'],
        star:4.5,
        imageUrl: '/assets/food1.jpg',
        tags: ['Sweets', 'Pastries', 'lunch'],
      },
      {
        id:2,
        name:'IceCream',
        cookTime :'10-20',
        price: 40,
        favorite:false,
        origins: ['London'],
        star:4.5,
        imageUrl: '/assets/food2.jpg',
        tags: ['Sweets', 'IceCream', 'snacks'],
      },


      {
        id:3,
        name:'Momos',
        cookTime :'20-30',
        price: 40,
        favorite:true,
        origins: ['China'],
        star:4.5,
        imageUrl: '/assets/food3.jpg',
        tags: ['FastFood', 'Momos', 'lunch'],
      },
      {
        id:4,
        name:'SpringRoll',
        cookTime :'10-20',
        price: 45,
        favorite:true,
        origins: ['USA'],
        star:4.0,
        imageUrl: '/assets/food4.jpg',
        tags: ['FastFood', 'SpringRoll', 'lunch'],
      },
      {
        id:5,
        name:'Idli',
        cookTime :'10-20',
        price: 30,
        favorite:false,
        origins: ['India'],
        star:4.5,
        imageUrl: '/assets/food5.jpg',
        tags: ['Veg', 'Idli', 'lunch'],
      },

      {
        id:6,
        name:'Dosa',
        cookTime :'10-30',
        price: 50,
        favorite:false,
        origins: ['India'],
        star:4.5,
        imageUrl: '/assets/food6.jpg',
        tags: ['Veg', 'Dosa', 'lunch'],
      },

      {
        id:7,
        name:'Panipuri',
        cookTime :'10-30',
        price: 20,
        favorite:false,
        origins: ['India'],
        star:4.5,
        imageUrl: '/assets/food7.jpg',
        tags: ['Veg', 'Dosa', 'Snacks'],
      },
      {
        id:8,
        name:'Samosa',
        cookTime :'10-30',
        price: 25,
        favorite:false,
        origins: ['India'],
        star:4.5,
        imageUrl: '/assets/food8.jpg',
        tags: ['Veg', 'Samosa', 'Snacks'],
      },
    ];
  }
  geAllFoodbyTag(tags: string): Foods[]{
    if(tags =='All'){
      return this.getAll();
    }
    else{
      return this.getAll().filter(food => food.tags?.includes(tags));
    }

  }


  getAllTags():Tag[]{
    return [
      { name:'All', count:1 },
      { name:'Momos', count:1 },
      { name:'Idli', count:1 },
      { name:'Dosa', count:1 },
      { name:'Pastries', count:1 },
      { name:'Panipuri', count:1 },
      { name:'Icecream', count:1 },
      { name:'Samosa', count:1 },
      { name:'Springroll', count:1 }

    ]

  }
}
