import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleCardComponent, ArticleListComponent } from './components';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HighlighterPipe } from './pipes/highlighter.pipe';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleCardComponent,
    HighlighterPipe
  ],
  providers:[],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatCardModule,
    MatGridListModule,
  ]
})
export class ArticlesModule { }
