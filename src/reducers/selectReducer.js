const selectReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TO_SELECT":
        state = [...state, action.payload];
        
        return state;
      default:
        return state;
    }
  };
  export default selectReducer;
  