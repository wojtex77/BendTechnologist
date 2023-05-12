import {Component, EventEmitter, Output} from '@angular/core';
import {ToolSetEntity} from "./entitites/ToolSetEntity";
import {MaterialEntity} from "./entitites/MaterialEntity";
import {MaterialGroupEntity} from "./entitites/MaterialGroupEntity";
import {MaterialThicknessEntity} from "./entitites/MaterialThicknessEntity";
import {RequiredDataWrapper} from "./entitites/RequiredDataWrapper";
import {Subject} from "rxjs";

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
  completeDataWrapper!: RequiredDataWrapper;


  eventsSubject: Subject<void> = new Subject<void>();

  triggerRecalculatingResults() {
    this.eventsSubject.next();
  }

  constructor() {
    this.toolSetSelected = new ToolSetEntity();
    this.materialThicknessSelected = new MaterialThicknessEntity();
    this.setMaterialBlank()
    this.setMaterialGroupBlank();
    this.completeDataWrapper = new RequiredDataWrapper(this.materialThicknessSelected,
      this.materialGroupSelected,
      this.materialSelected,
      this.toolSetSelected);
  }

  setSelectedToolSet($event: ToolSetEntity) {
    this.toolSetSelected = $event;
    this.completeDataWrapper.toolSetEntity = $event;
    this.triggerRecalculatingResults()
  }

  setSelectedMaterial($event: MaterialEntity) {

    if ($event.id === null) {
      this.setMaterialBlank()
      this.setMaterialGroupBlank()
    } else {
      this.materialSelected = $event;
      this.materialGroupSelected = $event.materialGroup;
    }
    this.completeDataWrapper.materialEntity = this.materialSelected;
    this.completeDataWrapper.materialGroupEntity = this.materialGroupSelected;
    this.triggerRecalculatingResults()
  }

  setSelectedMaterialGroup($event: MaterialGroupEntity) {

    if ($event.id === null) {
      this.setMaterialGroupBlank()
      this.setMaterialBlank()
    } else {
      this.materialGroupSelected = $event;
      this.setMaterialBlank();
    }
    this.completeDataWrapper.materialEntity = this.materialSelected;
    this.completeDataWrapper.materialGroupEntity = this.materialGroupSelected;
    this.triggerRecalculatingResults()
  }

  setSelectedMaterialThickness($event: MaterialThicknessEntity) {
    this.materialThicknessSelected = $event;
    this.completeDataWrapper.thickness = $event;
    this.triggerRecalculatingResults()
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
