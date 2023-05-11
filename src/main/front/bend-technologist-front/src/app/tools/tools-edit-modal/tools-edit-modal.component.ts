import {Component, EventEmitter} from '@angular/core';
import {MaterialGroupEntity} from "../../entitites/MaterialGroupEntity";
import {FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialGroupsService} from "../../material-groups/material-groups.service";
import {ToolSetEntity} from "../../entitites/ToolSetEntity";
import {ToolsService} from "../tools.service";

@Component({
  selector: 'app-tools-edit-modal',
  templateUrl: './tools-edit-modal.component.html',
  styleUrls: ['./tools-edit-modal.component.css']
})
export class ToolsEditModalComponent {

  public entityToEdit!: ToolSetEntity

  toolSetForm = new FormGroup({
    id: new FormControl(''),
    dieWidth: new FormControl(''),
    dieName: new FormControl(''),
    punchRadius: new FormControl(''),
    punchName: new FormControl(''),
    description: new FormControl('')
  });

  public editedToolSetSaved: EventEmitter<ToolSetEntity> = new EventEmitter();

  constructor(public activeEditMaterialModal: NgbActiveModal,
              private toolsService: ToolsService) {
  }

  setEntityToEdit(entity: ToolSetEntity) {
    this.entityToEdit = entity;
    this.toolSetForm.setValue({
      id: entity.id,
      dieWidth: entity.dieWidth.toString(),
      dieName: entity.dieName,
      punchRadius: entity.punchRadius.toString(),
      punchName: entity.punchName,
      description: entity.description
    })
  }


  onSubmit() {
    let toolSet = new ToolSetEntity();
    toolSet.id = this.toolSetForm.get("id")?.getRawValue();
    toolSet.punchRadius = this.toolSetForm.get('punchRadius')?.getRawValue();
    toolSet.punchName = this.toolSetForm.get('punchName')?.getRawValue();
    toolSet.dieWidth = this.toolSetForm.get('dieWidth')?.getRawValue();
    toolSet.dieName = this.toolSetForm.get('dieName')?.getRawValue();
    toolSet.description = this.toolSetForm.get('description')?.getRawValue();

    this.toolsService.saveToolSet(toolSet).subscribe(res => {
      this.activeEditMaterialModal.close();
      this.editedToolSetSaved.emit(res);
    });
  }


}
