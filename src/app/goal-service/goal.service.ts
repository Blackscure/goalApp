import { Injectable } from '@angular/core';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goal: Goal[] = [
    new Goal(1, 'Watch Finding Nemo; ', 'Find an online version and watch merlin find his son. ', new Date(2020, 3, 14)),
    new Goal(2, 'Buy cookies; ', 'i have to buy cookies for the parrot. ', new Date(2022, 4, 10)),
    new Goal(3, 'get new phone case; ', 'Diana has her birthday coming up soon. ', new Date(2022, 5, 20)),
    new Goal(4, 'Get dog food; ', 'Pupper likes expensive snacks. ', new Date(2022, 6, 10)),
    new Goal(5, 'Plot my world dominationplan; ', 'Cause i want to cure the corona virus. ', new Date(2022, 7, 28))]; 

  getGoal(){
    return this.goal
  }

  getGoal(id){
    for (let goal of this.goal){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}