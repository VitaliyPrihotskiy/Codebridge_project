import { createAction, props } from '@ngrx/store';
import { Article } from '../models/articles.model';

function scoped(templateString: TemplateStringsArray) {
  return `Articles: ${templateString[0]}`;
}

export const loadArticles = createAction(
  scoped`Load Articles`
);

export const loadArticlesSuccess = createAction(
  scoped`Load Articles Success`,
  props<{ articles: Article[] }>()
);

export const loadArticlesFailure = createAction(
  scoped`Load Articles Failure`,
  props<{ error: unknown }>()
);

export const loadArticleSuccess = createAction(
  scoped`Load Article Success`,
  props<{ article: Article }>()
);

export const loadArticleFailure = createAction(
  scoped`Load Article Failure`,
  props<{ error: unknown }>()
);

export const setFilterString = createAction(
  scoped`Set Filter String`,
  props<{ filterString: string }>()
);

export const setSelectedArticleId = createAction(
  scoped`Set Selected Article Id`,
  props<{ id: number }>()
);

export const resetSelectedArticleId = createAction(
  scoped`Reset Selected Article Id`
);