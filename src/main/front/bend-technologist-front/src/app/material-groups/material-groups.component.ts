import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MaterialGroupEntity} from "../entitites/MaterialGroupEntity";
import {MaterialGroupsService} from "./material-groups.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialGroupsNewModalComponent} from "./material-groups-new-modal/material-groups-new-modal.component";
import {MaterialEntity} from "../entitites/MaterialEntity";
import {MaterialEditModalComponent} from "../materials/material-edit-modal/material-edit-modal.component";
import {MaterialGroupsEditModalComponent} from "./material-groups-edit-modal/material-groups-edit-modal.component";

@Component({
  selector: 'app-material-groups',
  templateUrl: './material-groups.component.html',
  styleUrls: ['./material-groups.component.css']
})
export class MaterialGroupsComponent {

  public materialGroups: Array<MaterialGroupEntity>;

  constructor(private http: HttpClient, private materialGroupService: MaterialGroupsService, private modalNewMaterialGroupService: NgbModal, private modalEditMaterialGroupService: NgbModal) {
    this.materialGroups = []
  }

  ngOnInit(): void {

    this.materialGroupService.getMaterials().subscribe(res => {
      this.materialGroups = res;
    })
  }


  newMaterialGroup() {

    let materialGroupNewModalComponentReference = this.modalNewMaterialGroupService.open(MaterialGroupsNewModalComponent, {size: 'sm'});
    materialGroupNewModalComponentReference.componentInstance.newMaterialGroupSaved.subscribe((res: MaterialGroupEntity) => {
      this.materialGroups.push(res);
    });
  }

  removeMaterial(id: any) {

    this.materialGroupService.deleteMaterial(id).subscribe(() => {
      let i = 0;
      this.materialGroups.forEach(item => {
        if (item.id === id) {
          this.materialGroups.splice(i, 1)
        }
        i++;
      })
    });

  }

  editMaterial(id: any) {

    let entityToEdit!: MaterialGroupEntity;

    this.materialGroups.forEach(item => {
      if (item.id === id) {
        entityToEdit = item;
      }
    })
    let materialGroupEditModalComponentReference = this.modalEditMaterialGroupService.open(MaterialGroupsEditModalComponent, {size: 'sm'});
    materialGroupEditModalComponentReference.componentInstance.setEntityToEdit(entityToEdit);
    materialGroupEditModalComponentReference.componentInstance.editedMaterialGroupSaved.subscribe((res: MaterialGroupEntity) => {
      let i = 0;
      this.materialGroups.forEach(item => {
        if (item.id === id) {
          this.materialGroups.splice(i, 1, res)
        }
        i++;
      })
    })
  }
}
