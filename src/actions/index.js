export const addEmployees = (val) => {
    // console.log(val);
    return {        
        type: 'ADD_EMPLOYEES',
        payload: val
    };
};