import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, tap, } from 'rxjs';
import { setFilterString, setSelectedArticleId } from 'src/app/store/articles.action';
import { getFilteredArticlesViewModel} from 'src/app/store/articles.selectors';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  
})
export class ArticleListComponent {
  viewModel$= this.store.select(getFilteredArticlesViewModel);

  private readonly destroy$: Subject<boolean> = new Subject();

  constructor(private readonly store: Store) { }

  filter(input: string) {
    // this.service.filter(input, this.list, this.filteredList);
    // this.cd.markForCheck();
    this.store.dispatch(setFilterString({filterString:input}))
  }

}
