import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class Article {
  constructor(
    public id: number,
    public title: string,
    public url: string,
    public imageUrl: string,
    public summary: string,
    public updatedAt: Date
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  filter(input: string, filteredList: Article[], itemList: Article[]) {
    let twoMatches=itemList.filter(e => e.title.includes(input) && e.summary.includes(input));
    let titleMatches=itemList.filter(e => e.title.includes(input)&&!twoMatches.includes(e));
    let summaryMatches=itemList.filter(e => e.summary.includes(input)&&!twoMatches.includes(e))
    filteredList = [...twoMatches,...titleMatches,...summaryMatches];
  }

  getDataMethod() {
    return this.http.get('https://api.spaceflightnewsapi.net/v3/articles')
      .pipe(
        map(
          (val: any) => {
            for (let item of val) {
              item = new Article(
                item.id,
                item.title,
                item.url,
                item.imageUrl,
                item.summary,
                item.updatedAt)
                }
            return val
          }
        )
      )
  }
}
