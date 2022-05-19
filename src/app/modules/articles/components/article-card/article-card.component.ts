import { ChangeDetectionStrategy, Component, Input} from '@angular/core';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {

  @Input() id: number = 0;
  @Input() title: string = "Title";
  @Input() url: string = "#";
  @Input() imageUrl: string = "#";
  @Input() summary: string = "Summary ...";
  @Input() updatedAt: Date = new Date();
  @Input() filterString: string = '';

}
