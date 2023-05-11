import { Component } from '@angular/core';
import {ToolSetEntity} from "./entitites/ToolSetEntity";
import {MaterialEntity} from "./entitites/MaterialEntity";
import {MaterialGroupEntity} from "./entitites/MaterialGroupEntity";

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

  constructor() {
    this.toolSetSelected = new ToolSetEntity();
    this.setMaterialBlank()
    this.setMaterialGroupBlank();
  }

  setSelectedToolSet($event: ToolSetEntity) {
    this.toolSetSelected = $event;
  }

  setSelectedMaterial($event: MaterialEntity) {
    this.materialSelected = $event;
    this.materialGroupSelected = $event.materialGroup;
  }

  setSelectedMaterialGroup($event: MaterialGroupEntity) {
    this.materialGroupSelected = $event;
    this.setMaterialBlank();
  }

  private setMaterialBlank(){
    this.materialSelected = new MaterialEntity();
    this.materialSelected.en10088 = "nie wybrano (niewymagane)";
  }

  private setMaterialGroupBlank(){
    this.materialGroupSelected = new MaterialGroupEntity();
    this.materialGroupSelected.shortName = "nie wybrano";
  }
}
