import { Component } from '@angular/core';
import {ToolSetEntity} from "../entitites/ToolSetEntity";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
  public toolSet: ToolSetEntity []


  constructor() {
    this.toolSet = [];
  }

  newTools() {
    console.log("adding tool set")
  }

  removeTool(id: number) {
    console.log("removing tool set")
  }

  editTool(id: number) {
    console.log("editing tool set")
  }
}
