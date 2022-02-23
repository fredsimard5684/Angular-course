import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { CotePipePipe } from './pipes/cote-pipe.pipe';
import { EditorComponent } from './editor/editor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentListComponent } from './master/student-list/student-list.component';
import { MatModuleModule } from './mat-module.module';



// import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    CotePipePipe,
    EditorComponent,
    PageNotFoundComponent,
    StudentListComponent,
  ],
  exports: [],
  imports: [
    MatModuleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


    // GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
