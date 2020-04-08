import { AlertService } from './../alert-service/alert.service';
import { Goal } from './../goal';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { GoalService } from '../goal-service/goal.service';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {
  goal:Goal[];
  alertService: AlertService;

  quote: Quote; addNewGoal(goal) {
    let goalLength = this.goal.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goal.push(goal)
  } goToUrl(id) {
    this.router.navigate(['/goal', id])
  }

  deleteGoal(index) {
    let toDelete = confirm(`Are you sure you want to delete ${this.goal[index].name}`);
    if (toDelete) {
      this.goal.splice(index, 1)
      this.alertService.alertMe("Goal has been deleted")
    }

  } 
  
  constructor(goalService: GoalService, alertService: AlertService, private quoteService: QuoteRequestService, private router: Router) {
  this.goal = goalService.getGoal()
    this.alertService = alertService;
  } ngOnInit(): void {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }
}