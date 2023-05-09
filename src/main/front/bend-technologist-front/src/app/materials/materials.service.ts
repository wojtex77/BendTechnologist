import {HttpClient} from "@angular/common/http";
import {MaterialEntity} from "../entitites/MaterialEntity";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MaterialsService {

  private URL: string = "http://localhost:8080/material";

  constructor(private http: HttpClient) {
  }

  public getMaterials(): Observable<Array<MaterialEntity>> {
    return this.http.get<Array<MaterialEntity>>(this.URL);
  }

  public saveMaterial(material: MaterialEntity){
    const headers = {'content-type': 'application/json'}
    return this.http.post<MaterialEntity>(this.URL, material, {'headers': headers});
  }

  public deleteMaterial(id: number) {
    return this.http.delete<MaterialEntity>(this.URL + '/' + id);
  }
}
