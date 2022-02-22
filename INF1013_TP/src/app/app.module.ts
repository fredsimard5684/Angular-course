import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ProfileFeatureModule } from './features/profile-feature/profile-feature.module';
import { PortfolioFeatureModule } from './features/portfolio-feature/portfolio-feature.module';
import { RequestFeatureModule } from './features/request-feature/request-feature.module';
import { AgendaFeatureModule } from './features/agenda-feature/agenda-feature.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    ProfileFeatureModule,
    PortfolioFeatureModule,
    RequestFeatureModule,
    AgendaFeatureModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
