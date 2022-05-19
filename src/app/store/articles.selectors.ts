import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ArticlesState, ARTICLES_FEATURE_KEY } from "./articles.reducer"

const getArticlesFeatureState = createFeatureSelector<ArticlesState>(ARTICLES_FEATURE_KEY)

export const getArticles = createSelector(
    getArticlesFeatureState,
    state => state.articles
);

export const getFilterString = createSelector(
    getArticlesFeatureState,
    state => state.filterString
);

export const getSelectedId = createSelector(
    getArticlesFeatureState,
    state => state.selectedArticleId
);

export const getFilteredArticles = createSelector(
    getArticles,
    getFilterString,
    (articles, filterString) => filter(filterString,articles)
)

export const getFilteredArticlesViewModel = createSelector(
    getFilteredArticles,
    getFilterString,
    (articles, filterString) => ({
        articles, filterString
    })
)
export const getSelectedArticle = createSelector(
    getArticles,
    getSelectedId,
    (articles, id) => {
        return articles.find( article => article.id===id)
    }
)


function filter(input: string, itemList:any[]) {
    input=input.toLowerCase();
    let twoMatches=itemList.filter(e => e.title.toLowerCase().includes(input) && e.summary.toLowerCase().includes(input));
    let titleMatches=itemList.filter(e => e.title.toLowerCase().includes(input)&&!twoMatches.includes(e));
    let summaryMatches=itemList.filter(e => e.summary.toLowerCase().includes(input)&&!twoMatches.includes(e))
    return [...twoMatches,...titleMatches,...summaryMatches];
  }