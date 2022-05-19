
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GET_ARTICLES_URL } from "../constants/articles.constants";
import { Article } from "../models/articles.model";

@Injectable({ providedIn: 'root' })
export class ArticlesService {

  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(GET_ARTICLES_URL);
  }
}