import {DELETE_RESULT, STORE_RESULT} from "./actionsTypes";


const saveResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    }
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            // const oldResults = getState().res.results;
            // console.log('Old results:', oldResults);
            dispatch(saveResult(result));
        }, 2000);
    };
};

export const deleteResult = (idx) => {
    return {
        type: DELETE_RESULT,
        idx: idx
    }
};