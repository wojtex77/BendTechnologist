import {MaterialThicknessEntity} from "./MaterialThicknessEntity";
import {MaterialGroupEntity} from "./MaterialGroupEntity";
import {MaterialEntity} from "./MaterialEntity";
import {ToolSetEntity} from "./ToolSetEntity";

export class RequiredDataWrapper {

  private _thickness: MaterialThicknessEntity;
  private _materialGroupEntity: MaterialGroupEntity;
  private _materialEntity: MaterialEntity;
  private _toolSetEntity: ToolSetEntity;


  constructor(thickness: MaterialThicknessEntity, materialGroupEntity: MaterialGroupEntity, materialEntity: MaterialEntity, toolSetEntity: ToolSetEntity) {
    this._thickness = thickness;
    this._materialGroupEntity = materialGroupEntity;
    this._materialEntity = materialEntity;
    this._toolSetEntity = toolSetEntity;
  }


  get thickness(): MaterialThicknessEntity {
    return this._thickness;
  }

  set thickness(value: MaterialThicknessEntity) {
    this._thickness = value;
  }

  get materialGroupEntity(): MaterialGroupEntity {
    return this._materialGroupEntity;
  }

  set materialGroupEntity(value: MaterialGroupEntity) {
    this._materialGroupEntity = value;
  }

  get materialEntity(): MaterialEntity {
    return this._materialEntity;
  }

  set materialEntity(value: MaterialEntity) {
    this._materialEntity = value;
  }

  get toolSetEntity(): ToolSetEntity {
    return this._toolSetEntity;
  }

  set toolSetEntity(value: ToolSetEntity) {
    this._toolSetEntity = value;
  }
}
