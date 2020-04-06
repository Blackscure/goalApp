import { Injectable } from '@angular/core';
import { Goals } from '../goal';


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals
  }

  constructor() { }
}