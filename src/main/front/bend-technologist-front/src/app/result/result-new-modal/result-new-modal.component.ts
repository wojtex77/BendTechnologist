import {Component, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ResultService} from "../result.service";
import {BendAllowanceEntity} from "../../entitites/BendAllowanceEntity";

@Component({
  selector: 'app-result-new-modal',
  templateUrl: './result-new-modal.component.html',
  styleUrls: ['./result-new-modal.component.css']
})
export class ResultNewModalComponent {

  bendAllowanceForm = new FormGroup({
    bendAllowance: new FormControl('')
  });

  public newBendAllowanceSubmitted: EventEmitter<BendAllowanceEntity> = new EventEmitter();

  constructor(public activeNewBendAllowanceModal: NgbActiveModal, private resultService: ResultService) {
  }

  onSubmit() {
    let bendAllowance = new BendAllowanceEntity();
    bendAllowance.bendAllowance = this.bendAllowanceForm.get("bendAllowance")?.getRawValue();
    this.activeNewBendAllowanceModal.close();
    this.newBendAllowanceSubmitted.emit(bendAllowance);
  }
}
