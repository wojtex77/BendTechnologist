import {Component, EventEmitter, Output} from '@angular/core';
import {ToastService} from "../shared/toast-info/toast-info-service.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialThicknessService} from "./material-thickness.service";
import {MaterialThicknessEntity} from "../entitites/MaterialThicknessEntity";
import {
  MaterialThicknessNewModalComponent
} from "./material-thickness-new-modal/material-thickness-new-modal.component";

@Component({
  selector: 'app-material-thickness',
  templateUrl: './material-thickness.component.html',
  styleUrls: ['./material-thickness.component.css']
})
export class MaterialThicknessComponent {

  public materialThicknesses: MaterialThicknessEntity []
  private selectedMaterialThickness!: MaterialThicknessEntity;
  @Output() materialThicknessSelected = new EventEmitter<MaterialThicknessEntity>();


  constructor(private materialThicknessService: MaterialThicknessService,
              private toastService: ToastService,
              private modalEditThicknessService: NgbModal,
              private modalNewThicknessService: NgbModal) {
    this.materialThicknesses = [];
  }


  ngOnInit(): void {
    this.materialThicknessService.getAllMaterialThicknesses().subscribe(response => {
        this.materialThicknesses = response;
      },
      error => this.toastService.showDangerToast("Nie udało się pobrać grubości materiałów"))
  }

  newThickness() {
    console.log("adding material thickness")

    let thicknessNewModalComponentReference = this.modalNewThicknessService.open(MaterialThicknessNewModalComponent, {size: 'sm'});
    thicknessNewModalComponentReference.componentInstance.newThicknessSaved.subscribe((res: MaterialThicknessEntity) => {
      this.materialThicknesses.push(res);
      this.setAsActive(res);
      this.toastService.showSuccessToast("Dodano grubość materiału: " + res.thickness)
    });

  }

  setAsActive(tool: MaterialThicknessEntity) {

    this.selectedMaterialThickness = tool;
    this.materialThicknessSelected.emit(tool);
  }

  removeThickness(id: any) {
    console.log("removing thickness " + id)

    this.materialThicknessService.deleteMaterialThicknesses(id).subscribe(() => {
        let i = 0;
        this.materialThicknesses.forEach(item => {
          if (item.id === id) {
            this.materialThicknesses.splice(i, 1)
          }
          i++;
        })
        this.materialThicknessSelected.emit(new MaterialThicknessEntity())
        this.toastService.showSuccessToast("Pomyślnie usunięto grubość")
      },
      error => {
        this.toastService.showDangerToast("Nie udało się usunąć grubości")
      });
  }
}
