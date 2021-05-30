const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EMPLOYEES":
      for (const el of action.payload) {
        let ind = el["lastName"][0];
        if (state[ind]) {
          if (state[ind][0]["lastName"] === "---") {
            state[ind][0] = el;
          } else {
            state[ind].push(el);
          }
        }
        // console.log(action.payload[0]['lastName'][0])
      }
      return state;
    default:
      return state;
  }
};
export default employeeReducer;
