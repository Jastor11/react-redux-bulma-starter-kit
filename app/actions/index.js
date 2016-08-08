import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function postToPerla(message) {
    // const response = '';

    return {
        type: types.POST_TO_PERLA,
        message
    };
}
