import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const results = state.results.filter(result => result.id !== action.idx);
    return updateObject(state, {results: results});
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {
                results: state.results.concat({
                    id: new Date().getTime(),
                    value: action.result
                })
            });
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer;