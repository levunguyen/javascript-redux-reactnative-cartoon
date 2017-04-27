import * as types from './types'
import Api from '../lib/api'
export function addRecipe() {
    console.log("here");
    return {
        type: types.ADD_RECIPE
    }
}

export function fetchRecipes(ingredients) {
    console.log("Call fetch  recipe Action" + ingredients);
    return (dispatch, getState) => {
        const params = {
            "where": {
                "tags" : {
                    "contains": "shin"
                }
            },
            "limit": 10,
            "skip": 10,
            "sort": "points DESC"
        };
        return Api.post('feed/find/',params).then(resp => {
            dispatch(setSearchedRecipes({recipes: resp}));
        }).catch( (ex) => {
            console.log(ex);
        });
    }
}

export function setSearchedRecipes({ recipes }) {
    console.log("Call search recipe Action");
    return {
        type: types.SET_SEARCHED_RECIPES,
        recipes,
    }
}
