const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EMPLOYEES":
      return state.concat(...action.payload);
    default:
      return state;
  }
};
export default employeeReducer;
