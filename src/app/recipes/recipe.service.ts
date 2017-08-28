import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
        'Carbonara',
        'Carbonara is an Italian pasta dish from Rome made with eggs, hard cheese, bacon, and black pepper. Spaghetti is the usual pasta; however, fettuccine, rigatoni, linguine, or bucatini can also be used.',
        'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18170534/051121056-01-spaghetti-carbonara-recipe-main.jpg',
        [
            new Ingredient('pancetta', 2), new Ingredient('cheese',1), new Ingredient('eggs', 3), new Ingredient('spaghetti', 7)
        ]
    ),

    new Recipe(
        'Bolognese',
        'Bolognese sauce, known in Italian as ragù alla bolognese, ragù bolognese, or simply ragù, is a meat-based sauce originating from Bologna, Italy, hence the name.',
        'http://www.seriouseats.com/assets_c/2014/12/20141204-slow-roasted-bolognese-01-thumb-1500xauto-415845.jpg',
        [
            new Ingredient('mince', 4), new Ingredient('spaghetti', 7), new Ingredient('tomato', 14)
        ])
  ];
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.shoppingListService.addIngredients(ingredients);
  }

}
