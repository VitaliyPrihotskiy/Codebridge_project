import { Action, createReducer, on } from "@ngrx/store";
import { Article } from "../models/articles.model";
import {
    loadArticleFailure,
    loadArticles,
    loadArticlesFailure,
    loadArticlesSuccess,
    loadArticleSuccess,
    resetSelectedArticleId,
    setFilterString,
    setSelectedArticleId
} from "./articles.action";

export const ARTICLES_FEATURE_KEY = 'articles';

export interface ArticlesState {
    articles: Article[];
    isLoading: boolean;
    error: unknown;
    filterString: string;
    selectedArticleId: number | null;
}

const initialState: ArticlesState = {
    articles: [],
    isLoading: false,
    error: null,
    filterString: '',
    selectedArticleId: null
};

const articlesReducer = createReducer(
    initialState,
    on(loadArticles, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(loadArticlesSuccess, (state, { articles }) => ({
        ...state,
        articles,
        isLoading: false,
        error: null
    })),
    on(loadArticlesFailure, loadArticleFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false
    })),
    on(loadArticleSuccess, (state, { article }) => ({
        ...state,
        articles: [...state.articles, article],
        isLoading: false,
        error: null
    })),
    on(setFilterString, (state, { filterString }) => ({
        ...state,
        filterString
    })),
    on(setSelectedArticleId, (state, { id }) => ({
        ...state,
        selectedArticleId: id
    })),
    on(resetSelectedArticleId, (state) => ({
        ...state,
        selectedArticleId: initialState.selectedArticleId
    })),
)

export function reducer(state: ArticlesState, action: Action) {
    return articlesReducer(state, action);
}
