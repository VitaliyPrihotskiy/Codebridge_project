import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticlesEffect } from './store/articles.effects';
import { ARTICLES_FEATURE_KEY, reducer } from './store/articles.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forFeature(ARTICLES_FEATURE_KEY, reducer),
    StoreModule.forRoot({}),
    EffectsModule.forFeature([ArticlesEffect]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 100, logOnly: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
