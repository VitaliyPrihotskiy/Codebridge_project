import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'articles',
    pathMatch:'full'
  },

  { path: 'articles', loadChildren:() => import("./modules/articles/articles.module").then(mod => mod.ArticlesModule) },
  { path: 'articles/:id', loadChildren:() => import("./modules/article-page/article-page.module").then(mod => mod.ArticlePageModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
