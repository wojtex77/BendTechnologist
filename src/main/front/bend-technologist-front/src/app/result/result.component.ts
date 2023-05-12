import {Component, Input} from '@angular/core';
import {RequiredDataWrapper} from "../entitites/RequiredDataWrapper";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  @Input() public dataWrapper!: RequiredDataWrapper;
  isDataComplete: boolean = false;
  counter: number = 0;


  private eventsSubscription!: Subscription;

  @Input() triggersRecalculatingData!: Observable<void>;

  ngOnInit() {
    this.eventsSubscription = this.triggersRecalculatingData.subscribe(() => this.verifyDataCompletion());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  private verifyDataCompletion() {
    if (this.dataWrapper.thickness.id !== null &&
      this.dataWrapper.materialGroupEntity.id !== null &&
      this.dataWrapper.toolSetEntity.id !== null) {
      this.isDataComplete = true;
      this.counter++;
    }
    else this.isDataComplete = false;
  }

}
