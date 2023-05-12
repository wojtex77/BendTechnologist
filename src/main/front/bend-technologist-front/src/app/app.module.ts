import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialsComponent} from './materials/materials.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialNewModalComponent} from './materials/material-new-modal/material-new-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialEditModalComponent} from './materials/material-edit-modal/material-edit-modal.component';
import {MaterialGroupsComponent} from './material-groups/material-groups.component';
import {
  MaterialGroupsNewModalComponent
} from './material-groups/material-groups-new-modal/material-groups-new-modal.component';
import {
  MaterialGroupsEditModalComponent
} from './material-groups/material-groups-edit-modal/material-groups-edit-modal.component';
import {ToastInfoComponent} from './shared/toast-info/toast-info.component';
import {ToastInfoContainer} from "./shared/toast-info/toast-info-container.component";
import {ToolsComponent} from './tools/tools.component';
import { ToolsNewModalComponent } from './tools/tools-new-modal/tools-new-modal.component';
import { ToolsEditModalComponent } from './tools/tools-edit-modal/tools-edit-modal.component';
import { MaterialThicknessComponent } from './material-thickness/material-thickness.component';
import { MaterialThicknessNewModalComponent } from './material-thickness/material-thickness-new-modal/material-thickness-new-modal.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialsComponent,
    MaterialNewModalComponent,
    MaterialEditModalComponent,
    MaterialGroupsComponent,
    MaterialGroupsNewModalComponent,
    MaterialGroupsEditModalComponent,
    ToastInfoComponent,
    ToolsComponent,
    ToolsNewModalComponent,
    ToolsEditModalComponent,
    MaterialThicknessComponent,
    MaterialThicknessNewModalComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastInfoContainer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
