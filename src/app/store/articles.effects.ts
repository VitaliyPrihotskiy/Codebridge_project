import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, filter, map, of, switchMap, withLatestFrom } from "rxjs";
import { ArticlesService } from "../services/articles.service";
import { loadArticleFailure, loadArticles, loadArticlesFailure, loadArticlesSuccess, loadArticleSuccess, setSelectedArticleId } from "./articles.action";
import { getArticles, getSelectedArticle } from "./articles.selectors";

@Injectable()
export class ArticlesEffect {

    constructor(
        private readonly actions$: Actions,
        private readonly articlesService: ArticlesService,
        private readonly store:Store) {
    }

    loadArticles$ = createEffect(() => this.actions$.pipe(
        ofType(loadArticles),
        switchMap(() => {
            return this.articlesService.getArticles()
                .pipe(
                    map((articles) => loadArticlesSuccess({ articles })),
                    catchError((error) => {
                        return of(loadArticlesFailure(error));
                    })
                );
        })
    ));

    loadArticle$ = createEffect(() => this.actions$.pipe(
        ofType(setSelectedArticleId),
        withLatestFrom(this.store.select(getSelectedArticle)),
        filter(([, selectedArticle]) =>!selectedArticle),
        switchMap(([{id}, selectedArticle]) => {
            console.log(selectedArticle);
            
            return this.articlesService.getArticle(id)
                .pipe(
                    map((article) => loadArticleSuccess({ article })),
                    catchError((error) => {
                        return of(loadArticleFailure(error));
                    })
                );
        })
    ));
}

