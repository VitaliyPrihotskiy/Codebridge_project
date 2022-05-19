import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { resetSelectedArticleId, setSelectedArticleId } from 'src/app/store/articles.action';
import { getSelectedArticle } from 'src/app/store/articles.selectors';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePageComponent implements OnInit, OnDestroy {
  readonly selectedArticle$ = this.store.select(getSelectedArticle);

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this.store.dispatch(setSelectedArticleId({ id: +articleId }));
    }
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetSelectedArticleId());
  }
}
