import {Component, EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MaterialGroupEntity} from "../entitites/MaterialGroupEntity";
import {MaterialGroupsService} from "./material-groups.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialGroupsNewModalComponent} from "./material-groups-new-modal/material-groups-new-modal.component";
import {MaterialGroupsEditModalComponent} from "./material-groups-edit-modal/material-groups-edit-modal.component";
import {ToastService} from "../shared/toast-info/toast-info-service.component";

@Component({
  selector: 'app-material-groups',
  templateUrl: './material-groups.component.html',
  styleUrls: ['./material-groups.component.css']
})
export class MaterialGroupsComponent {

  public materialGroups: Array<MaterialGroupEntity>;
  @Output() materialGroupSelected = new EventEmitter<MaterialGroupEntity>();

  constructor(private http: HttpClient,
              private materialGroupService: MaterialGroupsService,
              private modalNewMaterialGroupService: NgbModal,
              private modalEditMaterialGroupService: NgbModal,
              private toastService: ToastService) {
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
      this.selectMaterialGroup(res);
      this.toastService.showSuccessToast("Pomyślnie dodano grupę materiałową \"" + res.fullName + "\"")
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
        this.materialGroupSelected.emit(new MaterialGroupEntity())
        this.toastService.showSuccessToast("Pomyślnie usunięto grupę materiałową")
      },
      (error) => {
        console.log(error.headers)
        console.log(error.status)
        this.toastService.showDangerToast("Nie można usunąć grupy materiałowej")
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
      this.toastService.showSuccessToast("Pomyślnie edytowano grupę materiałową \"" + res.fullName + "\"")
    })
  }

  selectMaterialGroup(materialGroup: MaterialGroupEntity) {
    this.materialGroupSelected.emit(materialGroup)
  }
}
