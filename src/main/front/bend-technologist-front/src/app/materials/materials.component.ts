import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MaterialEntity} from "../entitites/MaterialEntity";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialNewModalComponent} from "./material-new-modal/material-new-modal.component";
import {MaterialsService} from "./materials.service";
import {MaterialEditModalComponent} from "./material-edit-modal/material-edit-modal.component";
import {ToastService} from "../shared/toast-info/toast-info-service.component";

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  public materials: Array<MaterialEntity>;
  @Output() materialSelected = new EventEmitter<MaterialEntity>();

  constructor(private http: HttpClient,
              private modalNewMaterialService: NgbModal,
              private modalEditMaterialService: NgbModal,
              private materialService: MaterialsService,
              private toastService: ToastService) {
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
      this.toastService.showSuccessToast("Dodano nowy materiał: \"" + res.en10088 + "\"")
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
        this.toastService.showSuccessToast("Pomyślnie usunięto materiał")
    },
      error => {
        this.toastService.showDangerToast("Nie udało się usunąć materiału")
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
      this.toastService.showSuccessToast("Pomyślnie edytowano materiał \"" + res.en10088 + "\"")
    })
  }

  selectMaterial(material: MaterialEntity) {

    this.materialSelected.emit(material)
  }
}
