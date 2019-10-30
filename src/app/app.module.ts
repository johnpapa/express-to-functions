import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppStoreModule } from './store/store.module';
import { AboutComponent } from './about.component';
import { EntityDataModule } from '@ngrx/data';
import { InsightsService } from './core/insights.service';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule, AppRoutingModule, AppStoreModule, EntityDataModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private insights: InsightsService) {
    insights.connect();
  }
}
