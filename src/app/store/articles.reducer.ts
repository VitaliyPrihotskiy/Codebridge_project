import { Action, createReducer, on } from "@ngrx/store";
import { loadArticles, loadArticlesFailure, loadArticlesSuccess, setFilterString, setSelectedArticleId } from "./articles.action";

export const ARTICLES_FEATURE_KEY = 'articles';

export interface ArticlesState {
    articles: any[];
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
    })
    ),
    on(loadArticlesSuccess, (state, { articles }) => ({
        ...state,
        articles,
        isLoading: false
    })
    ),
    on(loadArticlesFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false
    })
    ),
    on(setFilterString, (state, { filterString }) => ({
        ...state,
        filterString
    })
    ),
    
    on(setSelectedArticleId, (state, { id }) => ({
        ...state,
        selectedArticleId:id
    })
    ),
)




export function reducer(state: ArticlesState, action: Action) {
    return articlesReducer(state, action);
}
