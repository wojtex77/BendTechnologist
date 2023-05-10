import {Component, EventEmitter, OnInit} from '@angular/core';
import {MaterialEntity} from "../../entitites/MaterialEntity";
import {FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialsService} from "../materials.service";
import {MaterialGroupsService} from "../../material-groups/material-groups.service";
import {MaterialGroupEntity} from "../../entitites/MaterialGroupEntity";

@Component({
  selector: 'app-material-edit-modal',
  templateUrl: './material-edit-modal.component.html',
  styleUrls: ['./material-edit-modal.component.css']
})
export class MaterialEditModalComponent implements OnInit{

  public entityToEdit!: MaterialEntity

  materialForm = new FormGroup({
    id: new FormControl(''),
    en10088: new FormControl(''),
    pn: new FormControl(''),
    aisi: new FormControl(''),
    din: new FormControl(''),
    gost: new FormControl(''),
    density: new FormControl(7.85),
    materialGroupId: new FormControl('')
  });

  public editedMaterialSaved: EventEmitter<MaterialEntity> = new EventEmitter();
  public materialGroups!: Array<MaterialGroupEntity>;

  constructor(public activeEditMaterialModal: NgbActiveModal, private materialsService: MaterialsService, private materialGroupService: MaterialGroupsService) {
  }

  ngOnInit(): void {
    this.materialGroupService.getMaterials().subscribe(res => {
      this.materialGroups = res;
    })
  }



  setEntityToEdit(entity: MaterialEntity) {
    this.entityToEdit = entity;
    this.materialForm.setValue({
      id: entity.id,
      en10088: entity.en10088,
      pn: entity.pn,
      aisi: entity.aisi,
      din: entity.din,
      gost: entity.gost,
      density: entity.density,
      materialGroupId: entity.materialGroup.id
    })
  }


  onSubmit() {
    let material = new MaterialEntity();
    material.id = this.materialForm.get("id")?.getRawValue();
    material.en10088 = this.materialForm.get("en10088")?.getRawValue();
    material.pn = this.materialForm.get("pn")?.getRawValue();
    material.aisi = this.materialForm.get("aisi")?.getRawValue();
    material.din = this.materialForm.get("din")?.getRawValue();
    material.gost = this.materialForm.get("gost")?.getRawValue();
    material.density = this.materialForm.get("density")?.getRawValue();
    material.materialGroup.id = this.materialForm.get("materialGroupId")?.getRawValue();

    this.materialsService.saveMaterial(material).subscribe(res => {
      this.activeEditMaterialModal.close();
      this.editedMaterialSaved.emit(res);
    });
  }
}
