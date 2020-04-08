import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { AlertService } from '../alert-service/alert.service';
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


  
    goal: Goal[] = [
      new Goal(1, 'Watch Finding Nemo; ', 'Find an online version and watch merlin find his son. ', new Date(2020, 3, 14)),
      new Goal(2, 'Buy cookies; ', 'i have to buy cookies for the parrot. ', new Date(2022, 4, 10)),
      new Goal(3, 'get new phone case; ', 'Diana has her birthday coming up soon. ', new Date(2022, 5, 20)),
      new Goal(4, 'Get dog food; ', 'Pupper likes expensive snacks. ', new Date(2022, 6, 10)),
      new Goal(5, 'Plot my world dominationplan; ', 'Cause i want to cure the corona virus. ', new Date(2022, 7, 28)),]; alertService: AlertService;

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

  } constructor(goalService: GoalService, alertService: AlertService, private quoteService: QuoteRequestService, private router: Router) {
  this.goal = goalService.getGoal()
    this.alertService = alertService;
  } ngOnInit(): void {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }
}