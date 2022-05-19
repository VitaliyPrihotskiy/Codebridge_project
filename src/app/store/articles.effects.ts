import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticlesService } from "../services/articles.service";
import { loadArticles, loadArticlesFailure, loadArticlesSuccess } from "./articles.action";

@Injectable()
export class ArticlesEffect {

    constructor(
        private readonly actions$: Actions,
        private readonly articlesService: ArticlesService) {
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
}

