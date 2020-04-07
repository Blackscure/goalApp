import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { Quote } from '../quote-class/quote';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})



export class GoalComponent implements OnInit {
  [x: string]: any;

  goal:Goal[];
  alertService:AlertService;
  quote:Quote;
  

  
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
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }

  constructor(goalService:GoalService, alertService:AlertService,http:HttpClient) {
    this.goal = goalService.getGoal()
    this.alertService = alertService;
  }

  OnInit() {

    interface ApiResponse{
      author:string;
      quote:string;
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
    })


  
  addNewGoal(goal){
    let goalLength = this.goal.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goal.push(goal)
  }

 
}