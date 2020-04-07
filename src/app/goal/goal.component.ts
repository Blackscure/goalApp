import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})



export class GoalComponent implements OnInit {

  goal:Goal[];
  

  constructor(goalService:GoalService) {
    this.goal = goalService.getGoal()
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  toggleDetails(index){
    this.goal[index].showDescription = !this.goal[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goal[index].name}?`)

      if (toDelete){
        this.goal.splice(index,1)
      }
    }
  }

   
  addNewGoal(goal){
    let goalLength = this.goal.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goal.push(goal)
  }
}