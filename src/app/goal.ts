export class Goal {
  public showDescription: boolean;
  static splice: any;
  constructor(public id: number,public name: string,public description: string, public completeDate: Date){
    this.showDescription=false;
  }
}