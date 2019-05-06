import {types} from './types' ;

export const actionCreators = {
    addItem: (item) => {
        return {type: types.ADD_ITEM, payload: item}
    },
    removeItem: (index) => {
        return {type: types.REMOVE_ITEM, payload: index}
    },
    toggleItemCompleted: (index) => {
        return {type: types.TOGGLE_ITEM_COMPLETED, payload: index}
    },
    removeCompleted: (item) => {
        return {type: types.REMOVE_COMPLETED, payload: item}
    },
}