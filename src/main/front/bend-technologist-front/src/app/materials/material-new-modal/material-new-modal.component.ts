import {Component, EventEmitter} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";
import {MaterialEntity} from "../../entitites/MaterialEntity";
import {MaterialsService} from "../materials.service";

@Component({
  selector: 'app-material-new-modal',
  templateUrl: './material-new-modal.component.html',
  styleUrls: ['./material-new-modal.component.css']
})
export class MaterialNewModalComponent {

  materialForm = new FormGroup({
    en10088: new FormControl(''),
    pn: new FormControl(''),
    aisi: new FormControl(''),
    din: new FormControl(''),
    gost: new FormControl(''),
    density: new FormControl(7.85),
  });

  public newMaterialSaved: EventEmitter<MaterialEntity> = new EventEmitter();

  constructor(public activeNewMaterialModal: NgbActiveModal, private materialsService: MaterialsService) {}

  onSubmit() {
    let material = new MaterialEntity();
    material.en10088 = this.materialForm.get("en10088")?.getRawValue();
    material.pn = this.materialForm.get("pn")?.getRawValue();
    material.aisi = this.materialForm.get("aisi")?.getRawValue();
    material.din = this.materialForm.get("din")?.getRawValue();
    material.gost = this.materialForm.get("gost")?.getRawValue();
    material.density = this.materialForm.get("density")?.getRawValue();

    this.materialsService.saveMaterial(material).subscribe(res => {
      console.log(res)
      this.activeNewMaterialModal.close();
      this.newMaterialSaved.emit(res);
    });
}}
