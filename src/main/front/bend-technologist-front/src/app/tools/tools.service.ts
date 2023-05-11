import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ToolSetEntity} from "../entitites/ToolSetEntity";

@Injectable({providedIn: "root"})
export class ToolsService {

  private URL: string = "http://localhost:8080/toolSet";

  constructor(private http: HttpClient) {
  }

  public getAllToolSets() {
    return this.http.get<Array<ToolSetEntity>>(this.URL);
  }

  public saveToolSet(toolSet: ToolSetEntity) {
    return this.http.post<ToolSetEntity>(this.URL, toolSet);
  }

  public deleteMaterial(id: number) {
    return this.http.delete<ToolSetEntity>(this.URL + "/" + id)
  }
}
