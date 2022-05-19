import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleCardComponent, ArticleListComponent } from './components';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleCardComponent,
    HighlighterPipe
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class ArticlesModule { }
