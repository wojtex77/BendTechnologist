import {Component, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../shared/toast-info/toast-info-service.component";
import {ToolSetEntity} from "../../entitites/ToolSetEntity";
import {ToolsService} from "../tools.service";

@Component({
  selector: 'app-tools-new-modal',
  templateUrl: './tools-new-modal.component.html',
  styleUrls: ['./tools-new-modal.component.css']
})
export class ToolsNewModalComponent {


  toolSetForm = new FormGroup({
    dieWidth: new FormControl(''),
    dieName: new FormControl(''),
    punchRadius: new FormControl(''),
    punchName: new FormControl(''),
    description: new FormControl('')
  });

  public newToolSetSaved: EventEmitter<ToolSetEntity> = new EventEmitter();

  constructor(public activeNewToolSetModal: NgbActiveModal,
              private toolSetService: ToolsService,
              private toastService: ToastService) {
  }

  onSubmit() {

    let toolSet = new ToolSetEntity();

    toolSet.punchRadius = this.toolSetForm.get('punchRadius')?.getRawValue();
    toolSet.punchName = this.toolSetForm.get('punchName')?.getRawValue();
    toolSet.dieWidth = this.toolSetForm.get('dieWidth')?.getRawValue();
    toolSet.dieName = this.toolSetForm.get('dieName')?.getRawValue();
    toolSet.description = this.toolSetForm.get('description')?.getRawValue();

    this.toolSetService.saveToolSet(toolSet).subscribe(res =>{
      this.newToolSetSaved.emit(res);
      this.activeNewToolSetModal.close();
    }, error => {
      this.toastService.showDangerToast("Zapis nie powiódł się")
    })

    console.log(toolSet)
  }
}
