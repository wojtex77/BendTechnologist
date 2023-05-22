import {Component, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BendAllowanceEntity} from "../../entitites/BendAllowanceEntity";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ResultService} from "../result.service";
import {ToolSetEntity} from "../../entitites/ToolSetEntity";

@Component({
  selector: 'app-result-edit-modal',
  templateUrl: './result-edit-modal.component.html',
  styleUrls: ['./result-edit-modal.component.css']
})
export class ResultEditModalComponent {
  bendAllowanceForm = new FormGroup({
    id: new FormControl(),
    bendAllowance: new FormControl('')
  });

  entityToEdit!: BendAllowanceEntity;

  public editBendAllowanceSubmitted: EventEmitter<BendAllowanceEntity> = new EventEmitter();

  constructor(public activeEditBendAllowanceModal: NgbActiveModal, private resultService: ResultService) {
  }



  setEntityToEdit(entity: BendAllowanceEntity) {
    this.entityToEdit = entity;
    this.bendAllowanceForm.setValue({
      id: entity.id,
      bendAllowance: entity.bendAllowance.toString()
    })
  }

  onSubmit() {
    let bendAllowance = new BendAllowanceEntity();
    bendAllowance.bendAllowance = this.bendAllowanceForm.get("bendAllowance")?.getRawValue();
    bendAllowance.id = this.bendAllowanceForm.get("id")?.getRawValue();
    this.activeEditBendAllowanceModal.close();
    this.editBendAllowanceSubmitted.emit(bendAllowance);
  }
}
