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
