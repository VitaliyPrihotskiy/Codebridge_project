import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadArticles, setFilterString } from 'src/app/store/articles.action';
import { getFilteredArticlesViewModel } from 'src/app/store/articles.selectors';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent implements OnInit {
  readonly viewModel$ = this.store.select(getFilteredArticlesViewModel);

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadArticles());
  }

  filter(input: string): void {
    this.store.dispatch(setFilterString({ filterString: input }))
  }
}
