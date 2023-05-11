import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolSetEntity} from "../entitites/ToolSetEntity";
import {ToolsService} from "./tools.service";
import {ToastService} from "../shared/toast-info/toast-info-service.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToolsNewModalComponent} from "./tools-new-modal/tools-new-modal.component";
import {ToolsEditModalComponent} from "./tools-edit-modal/tools-edit-modal.component";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit{

  public toolSets: ToolSetEntity []
  private selectedTool!: ToolSetEntity;
  @Output() toolSelected = new EventEmitter<ToolSetEntity>();


  constructor(private toolSetService: ToolsService,
              private toastService: ToastService,
              private modalEditToolSetService: NgbModal,
              private modalNewToolSetService: NgbModal) {
    this.toolSets = [];
  }



  ngOnInit(): void {
    this.toolSetService.getAllToolSets().subscribe(response =>{
      this.toolSets = response;
    },
      error => this.toastService.showDangerToast("Nie udało się pobrać danych narzędzi"))
  }

  newTools() {
    console.log("adding tool set")

    let toolSetNewModalComponentReference = this.modalNewToolSetService.open(ToolsNewModalComponent, {size: 'sm'});
    toolSetNewModalComponentReference.componentInstance.newToolSetSaved.subscribe((res: ToolSetEntity) => {
      this.toolSets.push(res);
      this.setAsActive(res);
      this.toastService.showSuccessToast("Dodano nowy zestaw narzędzi: \"" + res.punchName + "/" + res.dieName + "\"")
    });

  }

  removeTool(id: number) {
    console.log("removing tool set " + id)

    this.toolSetService.deleteMaterial(id).subscribe(() => {
        let i = 0;
        this.toolSets.forEach(item => {
          if (item.id === id) {
            this.toolSets.splice(i, 1)
          }
          i++;
        })
      this.toolSelected.emit(new ToolSetEntity())
        this.toastService.showSuccessToast("Pomyślnie usunięto zestaw narzędzi")
      },
      error => {
        this.toastService.showDangerToast("Nie udało się usunąć zestawu narzędzi")
      });
  }

  editTool(id: number) {
    console.log("editing tool set")

    let entityToEdit!: ToolSetEntity;

    this.toolSets.forEach(item => {
      if (item.id === id) {
        entityToEdit = item;
      }
    })
    let toolSetEditModalComponentReference = this.modalEditToolSetService.open(ToolsEditModalComponent, {size: 'sm'});
    toolSetEditModalComponentReference.componentInstance.setEntityToEdit(entityToEdit);
    toolSetEditModalComponentReference.componentInstance.editedToolSetSaved.subscribe((res: ToolSetEntity) => {
      let i = 0;
      this.toolSets.forEach(item => {
        if (item.id === id) {
          this.toolSets.splice(i, 1, res)
        }
        i++;
      })
      this.toastService.showSuccessToast("Pomyślnie edytowano zestaw \"" + res.punchName + "/" + res.dieName +"\"")
    })

  }

  setAsActive(tool: ToolSetEntity) {

    this.selectedTool = tool;
    this.toolSelected.emit(tool);
  }
}
