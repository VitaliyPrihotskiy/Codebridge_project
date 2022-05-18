import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent implements OnInit {

  @Input() id: number = 0;
  @Input() title: string = "Title";
  @Input() url: string = "#";
  @Input() imageUrl: string = "#";
  @Input() summary: string = "Summary ...";
  @Input() updatedAt: Date = new Date();
  @Input() filterString: string = '';

  ngOnInit(): void {
    // window.addEventListener('resize', () => {
    //   let scaledItems = document.getElementsByClassName('scaled') as unknown as HTMLElement[];
    //   scaledItems.forEach(item => {
    //     let coeff=Math.min(window.screen.width/this.pageWidth,window.screen.height/this.pageHeight)
    //     item.style.transform = `scale(${coeff});`
    //   });
    // })
  }

}
