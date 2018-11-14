import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ShopsComponent } from './shops/shops.component';
import { EditorComponent } from './editor/editor.component';
import { MapComponent } from './map/map.component';
import { HttpService } from './http.service';

const routes: Routes = [
  {path: "", redirectTo: '/shops', pathMatch: 'full'},
  {path: 'shops', component: ShopsComponent},
  {path: 'editor/:id', component: EditorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    EditorComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    AppService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
