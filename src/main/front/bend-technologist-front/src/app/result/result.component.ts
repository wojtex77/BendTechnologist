import {Component, Input} from '@angular/core';
import {RequiredDataWrapper} from "../entitites/RequiredDataWrapper";
import {Observable, Subscription} from "rxjs";
import {BendAllowanceEntity} from "../entitites/BendAllowanceEntity";
import {ResultService} from "./result.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ResultNewModalComponent} from "./result-new-modal/result-new-modal.component";
import {ToastService} from "../shared/toast-info/toast-info-service.component";
import {BendAllowanceDetailsEntity} from "../entitites/BendAllowanceDetailsEntity";
import {ResultEditModalComponent} from "./result-edit-modal/result-edit-modal.component";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  @Input() public dataWrapper!: RequiredDataWrapper;
  isInputDataComplete: boolean = false;
  isResult: boolean = false;
  counter: number = 0;
  dbBendAllowance!: BendAllowanceEntity;
  bendAllowanceDetails: BendAllowanceDetailsEntity;
  isDetailsShown = false;


  private eventsSubscription!: Subscription;

  @Input() triggersRecalculatingData!: Observable<void>;


  constructor(private resultService: ResultService,
              private modalNewResultService: NgbModal,
              private modalEditResultService: NgbModal,
              private toastService: ToastService) {
    this.bendAllowanceDetails = new BendAllowanceDetailsEntity();
  }

  ngOnInit() {
    this.eventsSubscription = this.triggersRecalculatingData.subscribe(() => this.proceedDataGathering());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  private proceedDataGathering() {
    if (this.dataWrapper.thickness.id !== null &&
      this.dataWrapper.materialGroupEntity.id !== null &&
      this.dataWrapper.toolSetEntity.id !== null) {
      this.isInputDataComplete = true;
      this.counter++;
      this.getBendAllowance()
    } else {
      this.isInputDataComplete = false;
    }
  }

  private getBendAllowance() {
    this.isDetailsShown = false;
    this.bendAllowanceDetails = new BendAllowanceDetailsEntity();
    this.resultService.getBendAllowance(this.dataWrapper).subscribe(response => {
      if (response != null) {
        this.dbBendAllowance = response;
        this.isResult = true;
      } else {
        this.isResult = false;
      }
    })
  }


  newBendAllowance() {

    let resultNewModalComponentReference = this.modalNewResultService.open(ResultNewModalComponent, {size: 'sm'});
    resultNewModalComponentReference.componentInstance.newBendAllowanceSubmitted.subscribe((res: BendAllowanceEntity) => {
      let submittedBendAllowance = res;
      this.resultService.saveBendAllowance(this.dataWrapper, submittedBendAllowance).subscribe(response =>{
          this.dbBendAllowance = response;
          console.log(response)
          this.toastService.showSuccessToast("Dodano nowy ubytek: \"" + response.bendAllowance + "\"")
        },
        error => {this.toastService.showDangerToast("Nie udało się zapisać ubytku")})
    });
  }

  editBendAllowance(id: number) {

    this.resultService.getAllowanceById(id).subscribe(response => {
      this.dbBendAllowance = response;
    })

    let resultEditModalComponentReference = this.modalEditResultService.open(ResultEditModalComponent, {size: 'sm'});
    resultEditModalComponentReference.componentInstance.setEntityToEdit(this.dbBendAllowance);
    resultEditModalComponentReference.componentInstance.editBendAllowanceSubmitted.subscribe((res: BendAllowanceEntity) => {
      let submittedBendAllowance = res;
      this.resultService.saveBendAllowance(this.dataWrapper, submittedBendAllowance).subscribe(response =>{
          this.dbBendAllowance = response;
          if (this.isDetailsShown){
            this.showMoreData(response.id)
          }
          this.toastService.showSuccessToast("Edytowano ubytek: \"" + response.bendAllowance + "\"")
        },
        error => {this.toastService.showDangerToast("Nie udało się zapisać ubytku")})
    });
  }

  showMoreData(id: number) {
    this.resultService.getMoreDetails(id).subscribe(response => {
      this.bendAllowanceDetails = response;
      this.isDetailsShown = true;
    })
  }
}
