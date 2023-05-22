import {Injectable} from "@angular/core";
import {RequiredDataWrapper} from "../entitites/RequiredDataWrapper";
import {HttpClient} from "@angular/common/http";
import {BendAllowanceEntity} from "../entitites/BendAllowanceEntity";
import {BendAllowanceDetailsEntity} from "../entitites/BendAllowanceDetailsEntity";

@Injectable({providedIn: "root"})
export class ResultService {

  private bendAllowanceURL = "http://localhost:8080/bendAllowance"


  constructor(private http: HttpClient) {
  }

  public getBendAllowance(dataWrapper: RequiredDataWrapper) {
    return this.http.get<BendAllowanceEntity>(this.bendAllowanceURL.concat(
      "/",
      dataWrapper.thickness.id,
      "/",
      dataWrapper.materialGroupEntity.id,
      "/",
      dataWrapper.toolSetEntity.id))
  }

  saveBendAllowance(dataWrapper: RequiredDataWrapper, submittedBendAllowance: BendAllowanceEntity) {

    submittedBendAllowance.materialThickness = dataWrapper.thickness;
    submittedBendAllowance.materialGroup = dataWrapper.materialGroupEntity;
    submittedBendAllowance.toolSet = dataWrapper.toolSetEntity;

    return this.http.post<BendAllowanceEntity>(this.bendAllowanceURL, submittedBendAllowance)
  }

  getMoreDetails(id: number){

    return this.http.get<BendAllowanceDetailsEntity>(this.bendAllowanceURL.concat("/details/", id.toString()));
  }

  getAllowanceById(id: number){

    return this.http.get<BendAllowanceEntity>(this.bendAllowanceURL.concat("/",id.toString()));
  }
}
