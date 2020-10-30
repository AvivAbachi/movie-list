import {SET_FILTER} from '../constants/actionTypes';
import * as MOVIES_FILTERS from '../constants/filterTypes';
import {FilterT, setMoviesFilter} from '../redux';

const initialState: FilterT = MOVIES_FILTERS.ALL;

const filterReducer = (state: FilterT = initialState, action: setMoviesFilter) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

export default filterReducer;
