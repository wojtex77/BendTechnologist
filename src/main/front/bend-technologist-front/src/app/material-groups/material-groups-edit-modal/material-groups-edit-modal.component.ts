import {Component, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialGroupsService} from "../material-groups.service";
import {MaterialGroupEntity} from "../../entitites/MaterialGroupEntity";

@Component({
  selector: 'app-material-groups-edit-modal',
  templateUrl: './material-groups-edit-modal.component.html',
  styleUrls: ['./material-groups-edit-modal.component.css']
})
export class MaterialGroupsEditModalComponent {


  public entityToEdit!: MaterialGroupEntity

  materialGroupForm = new FormGroup({
    id: new FormControl(''),
    shortName: new FormControl(''),
    fullName: new FormControl('')
  });

  public editedMaterialGroupSaved: EventEmitter<MaterialGroupEntity> = new EventEmitter();

  constructor(public activeEditMaterialModal: NgbActiveModal, private materialGroupsService: MaterialGroupsService) {
  }

  setEntityToEdit(entity: MaterialGroupEntity) {
    this.entityToEdit = entity;
    this.materialGroupForm.setValue({
      id: entity.id,
      shortName: entity.shortName,
      fullName: entity.fullName
    })
  }


  onSubmit() {
    let material = new MaterialGroupEntity();
    material.id = this.materialGroupForm.get("id")?.getRawValue();
    material.shortName = this.materialGroupForm.get("shortName")?.getRawValue();
    material.fullName = this.materialGroupForm.get("fullName")?.getRawValue();

    this.materialGroupsService.saveMaterial(material).subscribe(res => {
      this.activeEditMaterialModal.close();
      this.editedMaterialGroupSaved.emit(res);
    });
  }

}
