export const addEmployees = (val) => {
  // console.log(val);
  return {
    type: "ADD_EMPLOYEES",
    payload: val,
  };
};
export const addSelect = (val) => {
  return {
    type: "ADD_TO_SELECT",
    payload: val,
  };
};
export const deleteSelected = (val) => {
    return {
      type: "DELETE_SELECTED",
      payload: val,
    };
  };
  

  export const setSelect = (val) => {
    return {
      type: "SET_SELECT",
      payload: val,
    };
  };
