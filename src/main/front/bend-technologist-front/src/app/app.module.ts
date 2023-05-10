import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialsComponent} from './materials/materials.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialNewModalComponent} from './materials/material-new-modal/material-new-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MaterialEditModalComponent } from './materials/material-edit-modal/material-edit-modal.component';
import { MaterialGroupsComponent } from './material-groups/material-groups.component';
import { MaterialGroupsNewModalComponent } from './material-groups/material-groups-new-modal/material-groups-new-modal.component';
import { MaterialGroupsEditModalComponent } from './material-groups/material-groups-edit-modal/material-groups-edit-modal.component';
import { ToastInfoComponent } from './shared/toast-info/toast-info.component';
import {ToastInfoContainer} from "./shared/toast-info/toast-info-container.component";

@NgModule({
  declarations: [
    AppComponent,
    MaterialsComponent,
    MaterialNewModalComponent,
    MaterialEditModalComponent,
    MaterialGroupsComponent,
    MaterialGroupsNewModalComponent,
    MaterialGroupsEditModalComponent,
    ToastInfoComponent
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
