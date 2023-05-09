import {HttpClient} from "@angular/common/http";
import {MaterialGroupEntity} from "../entitites/MaterialGroupEntity";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MaterialGroupsService {

  private URL: string = "http://localhost:8080/materialGroup";

  constructor(private http: HttpClient) {
  }

  public getMaterials(): Observable<Array<MaterialGroupEntity>> {
    return this.http.get<Array<MaterialGroupEntity>>(this.URL);
  }

  public saveMaterial(materialGroup: MaterialGroupEntity){
    const headers = {'content-type': 'application/json'}
    return this.http.post<MaterialGroupEntity>(this.URL, materialGroup, {'headers': headers});
  }

  public deleteMaterial(id: number) {
    return this.http.delete<MaterialGroupEntity>(this.URL + '/' + id);
  }
}
