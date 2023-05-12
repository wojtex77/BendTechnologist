import {MaterialThicknessEntity} from "./MaterialThicknessEntity";
import {MaterialGroupEntity} from "./MaterialGroupEntity";
import {ToolSetEntity} from "./ToolSetEntity";

export class BendAllowanceEntity{

  id!: number;
  materialThickness!: MaterialThicknessEntity;
  materialGroup!: MaterialGroupEntity;
  toolSet!: ToolSetEntity;
  bendAllowance!: number;
  kFactor!: number;


  constructor() {
    this.id = 0;
    this.materialThickness = new MaterialThicknessEntity()
    this.materialGroup = new MaterialGroupEntity()
    this.toolSet = new ToolSetEntity()
    this.bendAllowance = 0
    this.kFactor = 1
  }
}
