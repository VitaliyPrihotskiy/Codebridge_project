import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Article, MainService } from 'src/app/main.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  input!: string;
  list: Article[] = [];
  filteredList: Article[] = [];
  private readonly destroy$: Subject<boolean> = new Subject();

  constructor(
    private readonly cd: ChangeDetectorRef,
    private readonly service: MainService) {

  }

  filter(input: string) {
    this.service.filter(input, this.list, this.filteredList);
    this.cd.markForCheck();
  }

  ngOnInit(): void {
    this.service.getDataMethod()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.list = res;
        this.filteredList = res;
        this.cd.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
