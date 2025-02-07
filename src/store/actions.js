import axiosClient from "../axiosClient";


export function searchMeals({ commit},keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        debugger
        commit('setSearchedMeals', data.meals);
    })
}
export function searchMealsByLetters({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    debugger;
    commit("setMealsByLetters", data.meals);
  });
}
export function searchMealsByIngredient({ commit},ing) {
    axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
      debugger;
      commit("setMealsByIngredients", data.meals);
    });
}