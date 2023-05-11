export class ToolSetEntity {
  public id: any;
  public dieWidth!: number;
  public dieName!: string;
  public punchRadius!: number;
  public punchName!: string;
  public description!: string;


  constructor() {
    this.id = null;
    this.dieWidth = 0;
    this.dieName = "V0";
    this.punchRadius = 0;
    this.punchName = "R0";
  }
}
