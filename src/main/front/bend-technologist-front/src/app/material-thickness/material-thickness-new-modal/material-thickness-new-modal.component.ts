import {Component, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../shared/toast-info/toast-info-service.component";
import {MaterialThicknessEntity} from "../../entitites/MaterialThicknessEntity";
import {MaterialThicknessService} from "../material-thickness.service";

@Component({
  selector: 'app-material-thickness-new-modal',
  templateUrl: './material-thickness-new-modal.component.html',
  styleUrls: ['./material-thickness-new-modal.component.css']
})
export class MaterialThicknessNewModalComponent {

  thicknessForm = new FormGroup({
    thickness: new FormControl('')
  });

  public newThicknessSaved: EventEmitter<MaterialThicknessEntity> = new EventEmitter();

  constructor(public activeNewThicknessModal: NgbActiveModal,
              private materialThicknessService: MaterialThicknessService,
              private toastService: ToastService) {
  }

  onSubmit() {

    let thickness = new MaterialThicknessEntity();

    thickness.thickness = this.thicknessForm.get('thickness')?.getRawValue();

    this.materialThicknessService.saveMaterialThicknesses(thickness).subscribe(res => {
      this.newThicknessSaved.emit(res);
      this.activeNewThicknessModal.close();
    }, error => {
      this.toastService.showDangerToast("Zapis nie powiódł się")
    })

    console.log(thickness)
  }
}
