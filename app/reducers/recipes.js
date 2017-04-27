import createReducers from '../lib/createReducer'
import * as types from '../actions/types'



export const recipeCount = createReducers(0,{

    [types.ADD_RECIPE](state,action)  {
        console.log("WTF");
    return state + 1;
  }
})

export const searchedRecipes = createReducers({}, {

    [types.SET_SEARCHED_RECIPES](state, action) {
        console.log("reducer data" + action.recipes )
        let newState = {}
        action.recipes.forEach( (recipe) => {
            let id = recipe.href
            newState[id] = Object.assign({}, recipe, { id });
        });
        return newState;
    },

});