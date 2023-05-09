import {Component, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialGroupsService} from "../material-groups.service";
import {MaterialGroupEntity} from "../../entitites/MaterialGroupEntity";

@Component({
  selector: 'app-material-groups-new-modal',
  templateUrl: './material-groups-new-modal.component.html',
  styleUrls: ['./material-groups-new-modal.component.css']
})
export class MaterialGroupsNewModalComponent {

  materialGroupForm = new FormGroup({
    shortName: new FormControl(''),
    fullName: new FormControl('')
  });

  public newMaterialGroupSaved: EventEmitter<MaterialGroupEntity> = new EventEmitter();

  constructor(public activeNewMaterialGroupModal: NgbActiveModal, private materialGroupsService: MaterialGroupsService) {
  }

  onSubmit() {
    let materialGroup = new MaterialGroupEntity();
    materialGroup.shortName = this.materialGroupForm.get("shortName")?.getRawValue();
    materialGroup.fullName = this.materialGroupForm.get("fullName")?.getRawValue();

    this.materialGroupsService.saveMaterial(materialGroup).subscribe(res => {
      console.log(res)
      this.activeNewMaterialGroupModal.close();
      this.newMaterialGroupSaved.emit(res);
    });
  }
}
