import {Component} from '@angular/core';
import {ToolSetEntity} from "./entitites/ToolSetEntity";
import {MaterialEntity} from "./entitites/MaterialEntity";
import {MaterialGroupEntity} from "./entitites/MaterialGroupEntity";
import {MaterialThicknessEntity} from "./entitites/MaterialThicknessEntity";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bend-technologist-front';

  toolSetSelected: ToolSetEntity;
  materialSelected!: MaterialEntity;
  materialGroupSelected!: MaterialGroupEntity;
  materialThicknessSelected!: MaterialThicknessEntity;

  constructor() {
    this.toolSetSelected = new ToolSetEntity();
    this.materialThicknessSelected = new MaterialThicknessEntity();
    this.setMaterialBlank()
    this.setMaterialGroupBlank();
  }

  setSelectedToolSet($event: ToolSetEntity) {
    this.toolSetSelected = $event;
  }

  setSelectedMaterial($event: MaterialEntity) {

    if ($event.id === null) {
      this.setMaterialBlank()
      this.setMaterialGroupBlank()
    } else {
      this.materialSelected = $event;
      this.materialGroupSelected = $event.materialGroup;
    }
  }

  setSelectedMaterialGroup($event: MaterialGroupEntity) {

    if ($event.id === null){
      this.setMaterialGroupBlank()
      this.setMaterialBlank()
    } else {
      this.materialGroupSelected = $event;
      this.setMaterialBlank();
    }
  }

  setSelectedMaterialThickness($event: MaterialThicknessEntity) {
    this.materialThicknessSelected = $event;
  }

  private setMaterialBlank() {
    this.materialSelected = new MaterialEntity();
    this.materialSelected.en10088 = "nie wybrano (niewymagane)";
  }

  private setMaterialGroupBlank() {
    this.materialGroupSelected = new MaterialGroupEntity();
    this.materialGroupSelected.shortName = "nie wybrano";
  }
}
