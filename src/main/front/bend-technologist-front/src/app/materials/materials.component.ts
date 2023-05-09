import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MaterialEntity} from "../entitites/MaterialEntity";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialNewModalComponent} from "./material-new-modal/material-new-modal.component";
import {MaterialsService} from "./materials.service";
import {MaterialEditModalComponent} from "./material-edit-modal/material-edit-modal.component";

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  public materials: Array<MaterialEntity>;

  constructor(private http: HttpClient, private modalNewMaterialService: NgbModal, private modalEditMaterialService: NgbModal, private materialService: MaterialsService) {
    this.materials = []
  }


  ngOnInit(): void {

    this.materialService.getMaterials().subscribe(res => {
      this.materials = res;
    });
  }


  newMaterial() {

    let materialNewModalComponentReference = this.modalNewMaterialService.open(MaterialNewModalComponent, {size: 'sm'});
    materialNewModalComponentReference.componentInstance.newMaterialSaved.subscribe((res: MaterialEntity) => {
      this.materials.push(res);
    });
  }


  removeMaterial(id: number) {

    this.materialService.deleteMaterial(id).subscribe(() => {
      let i = 0;
      this.materials.forEach(item => {
        if (item.id === id) {
          this.materials.splice(i, 1)
        }
        i++;
      })
    });
  }


  editMaterial(id: number) {

    let entityToEdit!: MaterialEntity;

    this.materials.forEach(item => {
      if (item.id === id) {
        entityToEdit = item;
      }
    })
    let materialEditModalComponentReference = this.modalEditMaterialService.open(MaterialEditModalComponent, {size: 'sm'});
    materialEditModalComponentReference.componentInstance.setEntityToEdit(entityToEdit);
    materialEditModalComponentReference.componentInstance.editedMaterialSaved.subscribe((res: MaterialEntity) => {
      let i = 0;
      this.materials.forEach(item => {
        if (item.id === id) {
          this.materials.splice(i, 1, res)
        }
        i++;
      })
    })
  }
}
