import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { ArticlePageRoutingModule } from './article-page-routing.module';

@NgModule({
  declarations: [
    ArticlePageComponent
  ],
  imports: [
    CommonModule,
    ArticlePageRoutingModule,
  ]
})
export class ArticlePageModule { }
