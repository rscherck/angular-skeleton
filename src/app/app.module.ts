// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';

// Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ErrorComponent} from './error/error.component';
import {AboutComponent} from './about/about.component';
import {WorkComponent} from './work/work.component';
import {MaterialComponent} from './material/material.component';
import {TelerikComponent} from './telerik/telerik.component';
import {DatatablesComponent} from './datatables/datatables.component';

// Dialog Components
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';

// Services
import {DataService} from './services/data.service';


const appRoutes: Routes = [
  {path: 'pieces', component: WorkComponent},
  {path: 'about', component: AboutComponent},
  {path: 'material', component: MaterialComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'telerik', component: TelerikComponent},
  {path: 'datatables', component: DatatablesComponent},
  {path: '', redirectTo: '/material', pathMatch: 'full'},
  {path: '**', component: MaterialComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorComponent,
    AboutComponent,
    WorkComponent,
    MaterialComponent,
    ConfirmDialogComponent,
    TelerikComponent,
    DatatablesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false, useHash: true}
    )
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
