import { SAVE_NAME } from './ActionTypes';

export const saveName = name => {
    return {
        type: SAVE_NAME,
        payload: name
    }
}