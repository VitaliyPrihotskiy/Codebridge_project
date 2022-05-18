import { ChangeDetectionStrategy, Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { loadArticles } from './store/articles.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
 
  constructor(private readonly store:Store){
    this.store.dispatch(loadArticles())
  }
}

