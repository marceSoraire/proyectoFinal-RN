import { CATEGORIES } from "../../constants/data/categories";
import { categoriesTypes } from "../types";

const { SELECT_CATEGORIES, FILTER_CATEGORY } = categoriesTypes;

const initialState = {
  data: CATEGORIES,
  selected: null,
  filteredCategory: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORIES:
      return {
        ...state,
        selected: state.data.find((cat) => cat.id === action.categorieId),
      };

    case FILTER_CATEGORY:
      return {
        ...state,
        filteredCategory: state.data.filter((cat) => cat.category === action.categoryId),
      };
    default:
      return state;
  }
};

export default categoryReducer;
