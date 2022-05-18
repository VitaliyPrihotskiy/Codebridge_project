
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { map, Observable, switchMap } from "rxjs";
import { Article } from "../main.service";
import { loadArticles } from "../store/articles.action";


@Injectable(
    {
        providedIn: 'root'
    }
)
export class ArticlesService {

    constructor(private httpClient: HttpClient) {
    }

    
  getArticles():Observable<Article[]> {
    return this.httpClient.get('https://api.spaceflightnewsapi.net/v3/articles')
      .pipe(
        map(
          (val: any) =>  val.map((item:any)=> new Article(
                item.id,
                item.title,
                item.url,
                item.imageUrl,
                item.summary,
                item.updatedAt)
                )
        )
      )
  }
}