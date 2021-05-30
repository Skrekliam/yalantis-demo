const selectReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_SELECT":
      state = [...state, action.payload];

      return state;
    case "DELETE_SELECTED":
      state = state.filter((el) => el !== action.payload);
      return state;

    case "SET_SELECT":
      state = action.payload;

      return state;
    default:
      return state;
  }
};
export default selectReducer;
