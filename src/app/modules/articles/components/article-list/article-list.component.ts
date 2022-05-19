import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setFilterString} from 'src/app/store/articles.action';
import { getFilteredArticlesViewModel} from 'src/app/store/articles.selectors';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  
})
export class ArticleListComponent {
  viewModel$= this.store.select(getFilteredArticlesViewModel);

  constructor(private readonly store: Store) { }

  filter(input: string) {
    this.store.dispatch(setFilterString({filterString:input}))
  }

}
