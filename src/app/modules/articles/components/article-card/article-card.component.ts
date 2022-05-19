import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from 'src/app/models/articles.model';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {
  @Input() article: Article | null = null;
  @Input() filterString = '';
}
