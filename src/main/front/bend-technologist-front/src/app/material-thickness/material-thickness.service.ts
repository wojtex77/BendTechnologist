import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MaterialThicknessEntity} from "../entitites/MaterialThicknessEntity";

@Injectable({providedIn: "root"})
export class MaterialThicknessService {

  private URL: string = "http://localhost:8080/materialThickness";

  constructor(private http: HttpClient) {
  }

  public getAllMaterialThicknesses() {
    return this.http.get<Array<MaterialThicknessEntity>>(this.URL);
  }

  public saveMaterialThicknesses(materialThickness: MaterialThicknessEntity) {
    return this.http.post<MaterialThicknessEntity>(this.URL, materialThickness);
  }

  public deleteMaterialThicknesses(id: number) {
    return this.http.delete<MaterialThicknessEntity>(this.URL + "/" + id)
  }
}
