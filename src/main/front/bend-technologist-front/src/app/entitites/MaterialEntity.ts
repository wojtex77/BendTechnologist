import {MaterialGroupEntity} from "./MaterialGroupEntity";

export class MaterialEntity {
  public id: any;
  public pn: any;
  public en10088: any;
  public aisi: any;
  public din: any;
  public gost: any;
  public density: any;
  public materialGroup: MaterialGroupEntity;


  constructor() {
    this.id = null;
    this.pn = null;
    this.en10088 = null;
    this.aisi = null;
    this.din = null;
    this.gost = null;
    this.density = null;
    this.materialGroup = new MaterialGroupEntity();
  }
}
